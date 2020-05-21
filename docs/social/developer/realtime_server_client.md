---
title: Real-time server-client interaction
id: realtime_server_client
sidebar_label: Real-time server-client interaction
custom_edit_url: https://github.com/red-gold/red-gold-web/edit/master/docs/social/developer/realtime_server_client.md
original_id: realtime_server_client
---

## Real-time server-client interaction using Websocket server and Redux in Telar Social
In this article we will explain how we send `actions` to fronend in realtime using Action Controller,  Websocket and Redux to change the state of Telar Social frontend **in a nutshell**.


### Flux pattern
Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

### Redux
Redux is a library inspired by Flux and can be considered as an implementation of Flux. Redux makes easy to handle the state of the application and manage to display data on user actions. It is a very powerful library but also very lightweight.

### Redux in Telar Social frontend
In Telar Social fronend we are using Redux to manage to state. All the data is stored in a single storage of Redux. Calling action (a simple object for redux dispatcher) by dispatcher will change the state of forntend.


### Change the frontend state from Action Controller
Microservices send the action (to be dispach in frontend by Redux) to Action Controller then Action cotroller will send it to websocket server to handle. Websocket server will send the action to respective user. Frontend will dispatch the action and change the state.


Microservice -> Action Controller  -> Websocket server -> Frontend (Redux)


 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.
