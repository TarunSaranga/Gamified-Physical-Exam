package team35.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cases {
  @Id
  @GeneratedValue
  private int id;
  private int cid;
  private String case_name;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getCid() {
    return cid;
  }

  public void setCid(int cid) {
    this.cid = cid;
  }

  public String getCase_name() {
    return case_name;
  }

  public void setCase_name(String case_name) {
    this.case_name = case_name;
  }

  @Override
  public String toString() {
    return "Cases{" +
        "id=" + id +
        ", cid=" + cid +
        ", case_name='" + case_name + '\'' +
        '}';
  }
}
