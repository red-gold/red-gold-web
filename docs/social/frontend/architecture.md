---
title: Architecture
id: architecture
sidebar_label: Architecture
custom_edit_url: https://github.com/red-gold/red-gold-web/edit/master/docs/social/fronend/architecture.md
original_id: architecture
---
<img height="400" width="700" src="https://raw.githubusercontent.com/red-gold/react-social-network/next/docs/app/layer.png">

## Supporting multiple data platforms.
 With dependency injection and new structure we have tried to support variety of data platforms such as Google Cloud Firebase, AWS, Azure or using backend such as ASP.NET, PHP, JAVA, etc. 
 
<img height="400" width="700" src="https://raw.githubusercontent.com/red-gold/react-social-network/next/docs/app/layer-1.png">

## Easy and fast to scale in structure
  Layers are organized in the way we have easy and less changes for adding/removing features. It could be integrated with server side too. As a result we are faster in developing in both side.

<img height="400" width="700" src="https://raw.githubusercontent.com/red-gold/react-social-network/next/docs/app/layer-3.png">

## Integrating and reusability in both mobile and web app
  With new structure we are able to develop the mobile app in parallel with web app **only** with changing `Components` layer. It means we can keep `Core`, `Data` layers, `Actions`, `Reducers`, etc. What we have high reusability and fast in producing the products.
 
<img height="400" width="700" src="https://raw.githubusercontent.com/red-gold/react-social-network/next/docs/app/layer-5.png">


## Directory Structure

```bash
root-directory
├── src
│   ├── api
│   ├── assets
│   ├── components
│   ├── config
│   ├── constants
│   ├── containers
│   ├── core
│   │   ├── domain
│   │   │   ├── entityName1
│   │   │   ├── entityName2
│   │   │   └── ...
│   │   ├── factories
│   │   └── services
│   │       ├── entityName1
│   │       ├── entityName2
│   │       └── ...
│   ├── data
│   │   ├── webAPI1
│   │   │   ├── services
│   │   │   │   ├── entityName1
│   │   │   │   ├── entityName2
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── webAPI2
│   │   │   ├── services
│   │   │   │   ├── entityName1
│   │   │   │   ├── entityName2
│   │   │   │   └── ...
│   │   │   └── ...
│   ├── layouts
│   ├── lib
│   ├── locales
│   ├── models
│   │   ├── entityName1
│   │   ├── entityName2
│   │   └── ...
│   ├── routes
│   ├── sotre
│   │   ├── actions
│   │   ├── reducers
│   │   └── sagas
│   ├── styles
│   │   ├── base
│   │   └── components
│   └── typings
└── public
```

  ### Directory Descriptions
 
  * **React Components**: We devided react components components in three parts. The component which is [stateless](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc), we keep in `src/layouts`.
                          The `src/containers` including master components which we use router to load these components. 
                          The `src/components` in including state components.
  * **State Management**: The `src/store` including directories managing redux store states. 
                          The `store/actions` including [actions creators](https://redux.js.org/basics/actions#action-creators).
                          The `store/reducers` including [redux reducers](https://redux.js.org/basics/reducers).
                          The `store/sagas` including saga files from [redux-saga](https://redux-saga.js.org/) 
                            to manage side effects such as asynchronous things like data fetching. 
    contains example documentation files written in Markdown.
  * **Web API Service**: The `website/blog-examples-from-docusaurus` directory contains examples of blog posts written in markdown.
  * **Core Management**: We keep the `src/core` as a most stable layer that includes `core/domain` including Web API Service class entities,
                          `core/factories` including factory interface and class for Web API Service classes and `core/services`
                          including main interfaces for Web API Service in `src/data` directory.
### General Frontend Flow

<img alt="General Frontend Flow" src="/img/diagrams/frontend-flow.png" />

To **manage states** in frontend side, Telar Social has a simple implementation of [Redux](https://redux.js.org/introduction/motivation). Follow above diagram `Components` emit an action from `Actions`. 
If the action is a direct change on state in [Redux Store](https://redux.js.org/api/store) `Reducers` will execute that action. If the action is async or needs to call an async web api `Sagas` will execute that action.

`Sagas` is a layer that manage side effects. Using [redux-saga](https://redux-saga.js.org/) library we can handle `async actions` easier.
> Asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures. [redux-saga doc](https://redux-saga.js.org/)

<img alt="General Frontend Flow" src="/img/diagrams/redux-store-flow.png" />

`Sagas` layer using IOC container to access the `Web Service API`. When async action is done, `saga` will call another action to change respective state in (https://redux.js.org/api/store).

### Using IOC Container 

Thanks to [InversifyJS](http://inversify.io/) we are able to implement javascript project that adheres to the SOLID principles. With this we can have different implementation from `Data` or `Web Service API` layer. With the **least** changes are able to have different solutions for backend such as server-less, docker, and etc.

For example [Firestore Client](https://github.com/red-gold/react-social-network/tree/v0.7.0/src/data/firestoreClient) implemented by Red Gold team. To use [Firestore Client](https://github.com/red-gold/react-social-network/tree/v0.7.0/src/data/firestoreClient) we need to call [useFirestor()](https://github.com/red-gold/react-social-network/blob/v0.7.0/src/data/firestoreClient/dependecyRegisterar.ts#L36) that bind classes to core service interfaces. We need to call the function in [Social Engine](https://github.com/red-gold/react-social-network/blob/v0.7.0/src/socialEngine.ts#L24) file that execute function before rendering components.

<img alt="General Frontend Flow" src="/img/diagrams/ioc-flow.png" />


 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.

