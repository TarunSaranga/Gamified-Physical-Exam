package team35.interfaces;

import org.springframework.data.repository.CrudRepository;
import team35.model.Cases;

public interface CaseRepository extends CrudRepository<Cases, Integer> {}
