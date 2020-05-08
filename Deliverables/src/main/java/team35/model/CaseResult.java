package team35.model;

import javax.validation.constraints.NotBlank;

public class CaseResult {

  @NotBlank(message="exam name can't be empty")
  String caseName;

  @NotBlank(message="measurement can't be empty")
  String caseMeasurement;

  @NotBlank(message="Duration can't be empty")
  String duration;

  public String getCaseName() {
    return caseName;
  }

  public void setCaseName(String caseName) {
    this.caseName = caseName;
  }

  public String getCaseMeasurement() {
    return caseMeasurement;
  }

  public void setCaseMeasurement(String caseMeasurement) {
    this.caseMeasurement = caseMeasurement;
  }

  public String getDuration() {
    return duration;
  }

  public void setDuration(String duration) {
    this.duration = duration;
  }

  @Override
  public String toString() {
    return "CaseResult{" +
        "caseName='" + caseName + '\'' +
        ", caseMeasurement='" + caseMeasurement + '\'' +
        ", duration='" + duration + '\'' +
        '}';
  }
}
