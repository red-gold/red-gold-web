---
title: Domain Driven Design
id: ddd
sidebar_label: Domain Driven Design
custom_edit_url: https://github.com/red-gold/red-gold-web/edit/master/docs/social/cloud_reference/ddd.md
original_id: ddd
---

# Telar Social Architecture using Domain Driven Design for Microservices
In this Article you will learn about Telar Social Architecture and how it helps to boost your productivity, development Speed, flexibility, scalability and so on. We are not going deep in DDD and Microservices but how we used them in Telar Social **in a nutshell**.



### What is microservice
It's a system design style that break your system to small independent microservices.

### Microservice advantages
- Easier to build and maintain project.
- Smaller and faster deployments.
- High scalability.
- Low impact on other services with isolation. 
- Freedom to choose technology. 
- Improve team productivity.
and more advantages.

### Domain Driven Design for Microservices
Domain-Driven Design (DDD)—a design approach where the business domain is carefully modeled in software and evolved over time, independently. It used to build systems that have a complex business domain.


### Microservice Communication in Telar Social

- Synchronous
 Front of each microservice is a Rest API. The client sends a request and waits for a response from the service. That's independent of the client code execution that could be synchronous (thread is blocked) or asynchronous (thread isn't blocked, and the response will reach a callback eventually). The important point here is that the protocol (HTTP/HTTPS) is synchronous and the client code can only continue its task when it receives the HTTP server response.

- Asynchronous Message Queuing
In this system, messages are persisted in a queue. One or more consumers can consume the messages in the queue, but a particular message can be consumed by a maximum of one consumer only. Once a consumer reads a message in the queue, it disappears from that queue. If there are no consumers available at the time the message is sent, it will be kept until a consumer is available that can process the message.

- Asynchronous Publish subscribe **(Enterprise Edition)**
In the publish-subscribe system, messages are persisted in a topic. Consumers can subscribe to one or more topics and consume all the messages in that topic. In the Publish-Subscribe system, message producers are called publishers and message consumers are called subscribers.

### Telar Social Microservice Architecture
In Telar Social following best practice architecture, Following this architecture:
- We can have different team with different technologies, different programming language and base on different 
- We can config auto scaling for each microservice base on the metrics (like network traffic) to be specific for that microserice. By that we optimize resource usage and reduce the cost.
- In the case if a microservice crashes, other microservice continue their job giving service to the clients. 
- Kubernetes do periodic checks on the health state of each microservice. If a microsevice fails consecutive health checks over an extended time period, Kubernetes initiates a repair process for that microservice.
- Change and maintain a microservice without influencing on other microservices. 
- Each miroservice configuration is separated to different config file which is accessile via `config` directory from project root directory. Specially for `Enterprice` you can use different database for each microservice base on your business domain.

**Community Edition Design on Kubernetes**

```

         <|>                <|>  Rest API   <|>  Users  ->  {User Auth, User Profile, User Authentication}  
         <|>                <|>  Rest API   <|>  Social ->  {Circles, User Relations}                                
         <|>                <|>  Rest API   <|>             Actions                                                                                          
         <|>                <|>  Rest API   <|>             Admin                                                                                          
 Client  <|> API Gateway    <|>  Rest API   <|>             Posts                                                             
         <|>                <|>  Rest API   <|>             Comments                                                                                          
         <|>                <|>  Rest API   <|>             Votes                                                             
         <|>                <|>  Rest API   <|>             Gallery                                                              
         <|>                <|>  Rest API   <|>             Notifications                                                                                          
         <|>                <|>  Rest API   <|>             Storage   
```  

- Communication
1. Client Send a synchronous request to API Gateway and waiting for the response from microservice.
2. Client/Microservice Send an asynchronous request to API Gateway and pushing in the queue. In this method user do not wait for the response any more. After microservice is done with the job will call Action microservice(or other microservices) . Action microservice will send the appropriate action to UI dispatcher to update the user interface. (To learn more about Action Microservice read [Flux Pattern for Server-Client interaction in Telar Social]() article)





**Enterprise Edition Design  on Kubernetes**

```
         <|>              <|>  Rest API   <|>  Users  {User Auth, User Profile, User Authentication}  
         <|>              <|>  Rest API   <|>  Social {Circles, User Relations}                                
         <|>              <|>  Rest API   <|>         Admin                                                                                          
         <|> API Gateway  <|>  Rest API   <|>         Posts                                                             
  Client <|>              <|>  Rest API   <|>         Comments                                                                                          
         <|>              <|>  Rest API   <|>         Votes                                                             
         <|>              <|>  Rest API   <|>         Gallery                                                              
         <|>              <|>  Rest API   <|>         Notifications                                                                                          
         <|>              <|>  Rest API   <|>         Storage                                                           

<|>                   <|>  Database                       
<|>                   <|>  Database 
<|>                   <|>  Database 
<|>                   <|>  Database 
<|>   Action Pub/Sub  <|>  Database
<|>  (Message Broker) <|>  Database
<|>                   <|>  Database
<|>                   <|>  Database
<|>                   <|>  Database

```

- Communication
For **Enterprise Edition**, in addition to **Community Edition** communication, we provided `Pub/Sub` using `Kafka`. Microservices are subscribing to `Kafka topics`and when a message received the function will be executed handling the message. In this pattern a message can be consumed with many functions at the same time.



## Directory Structure (server-side)

**Core**: Including core operations on Telar Social. We keep the src/core as the most stable layer that other layers use in common.

**Controller** : The Controller handle any incoming request from API Gateway. Controllers including functions called `handler` which handles incoming browser requests, retrieves necessary model data and returns appropriate responses.

**Services**: Do the data operations on your domain.

**Web**: Including Telar Social frontend using ReactJS.

```bash
root-directory
├── src
│   ├── core
│   │   ├── config
│   │   ├── data
│   │   │   ├── Client-DB
│   │   │   └── ...
│   │   ├── server
│   │   ├── utils
│   │   └── ...
│   ├── domain
│   │   ├── domain-name-1
│   │   ├── domain-name-2
│   │   │   ├── sub-domain-name-1
│   │   │   ├── sub-domain-name-2
│   │   │   └── ...
│   │   └── ...
│   ├── constants
│   ├── controllers
│   │   ├── domain-name-1
│   │   │   ├── handlers
│   │   │   ├── config
│   │   │   └── vendor
│   │   ├── domain-name-2
│   │   │   ├── sub-domain-name-1
│   │   │   │   ├── handlers
│   │   │   │   ├── config
│   │   │   │   └── vendor
│   │   │   ├── sub-domain-name-2
│   │   │   │   ├── handlers
│   │   │   │   ├── config
│   │   │   │   └── vendor
│   │   │   └── ...
│   │   └── ...
│   ├── models
│   │   ├── domain-name-1
│   │   ├── domain-name-2
│   │   │   ├── sub-domain-name-1
│   │   │   ├── sub-domain-name-2
│   │   │   └── ...
│   │   └── ...
│   ├── services
│   │   ├── domain-name-1
│   │   ├── domain-name-2
│   │   │   ├── sub-domain-name-1
│   │   │   ├── sub-domain-name-2
│   │   │   └── ...
│   │   └── ...
│   └── web
│       ├── ts-front-end
│       └── ts-ui
│── config
└── playground
```

> ⭐️ This page needs help. Please help with your contribution. To start click on edit button.