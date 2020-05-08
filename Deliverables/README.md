# Team 35 Project
## Prerequisite
Install mvn, docker, java, Spring boot.

## Clone the project

## Run the command below if you wish to use mvn wrapper
```bat
mvn -N io.takari:maven:wrapper
```

## Build the project into package locally.
```bat
mvn package && java -jar target/team35-spring-boot-0.1.0.jar
```

## Run the application locally.
```bat
mvn spring-boot:run
```

## Build the artifact
```bat
mvn install
```

## Clean the old artifact
```bat
mvn clean
```

## Run the following one-time command before running docker
```bat
mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)
```

## Docker build
```bat
docker build -t team35/team35-spring-boot-docker .
```

## Running Docker
```bat
docker run -p 8080:8080 -t team35/team35-spring-boot-docker
```

## Run application
Nav to localhost:8080
