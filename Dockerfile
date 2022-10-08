FROM openjdk:17

LABEL maintainer="dvizenie77@gmail.com"

ADD backend/target/movieDB.jar movieDB.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /movieDB.jar"]