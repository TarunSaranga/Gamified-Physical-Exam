package team35.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import team35.model.CaseResult;
import team35.services.CaseService;

import org.hl7.fhir.dstu3.model.Observation;
import org.hl7.fhir.dstu3.model.Bundle;
import org.hl7.fhir.dstu3.model.Quantity;

@Controller
public class CaseHandlerController {
  @Autowired
  CaseService caseService;

  @GetMapping("/")
  public String index() {
    return "index";
  }

  @PostMapping("/api/fhir")
  public ResponseEntity<?> postFhirResponse(@Valid @RequestBody String caseResultJson, Errors errors)
      throws IOException {
    ObjectMapper mapper = new ObjectMapper();
    try {
      List<CaseResult> caseResults = Arrays.asList(mapper.readValue(caseResultJson,
          CaseResult[].class));
      createBundle(caseResults);
    } catch (IOException e) {
      e.printStackTrace();
    }

    return ResponseEntity.ok("success");
  }

  public Bundle createBundle(List<CaseResult> caseResults) {
    Bundle bundle = new Bundle();
    int count = 1;
    for (CaseResult caseResult : caseResults) {
        Observation obsToAdd = addObservation(caseResult);
        bundle.addEntry()
            .setResource(obsToAdd)
            .getRequest()
            .setUrl("Observation " + Integer.toString(count++)) //Observation 1, Observation 2, etc.
            .setMethod(Bundle.HTTPVerb.POST); //Maybe this is an API call?, Kind of Unsure what this does
    }
    return bundle;
  }

  public Observation addObservation(CaseResult caseResult) {
    Observation obs = new Observation();
    obs.getCode()
        .addCoding()
        .setSystem("http://loinc.org")
        .setCode(caseResult.getCaseName())
        .setDisplay(caseResult.getCaseMeasurement()); //Loinc Code Stuff
    obs.setValue(
        new Quantity()
            .setUnit(caseResult.getDuration())
            .setSystem("http://unitsofmeasure.org")); //Results Stuff
    return obs;
  }
}
