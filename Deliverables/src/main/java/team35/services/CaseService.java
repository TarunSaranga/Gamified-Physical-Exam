package team35.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team35.interfaces.CaseRepository;
import team35.model.Cases;

@Service
public class CaseService {

  @Autowired
  CaseRepository caseRepository;

  public List<Cases> getAllCases() {
    List<Cases> cases = new ArrayList<>();
    caseRepository.findAll().forEach(c -> cases.add(c));
    return cases;
  }
}
