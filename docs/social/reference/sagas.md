---
title: Sagas
id: sagas
sidebar_label: Sagas
custom_edit_url: https://github.com/red-gold/social-docs/edit/master/docs/reference/actions.md
original_id: sagas
---
This layer is responsible to handle action and call request to server and reducer.

---

##Authorize
This saga is responsible to handle action to call authorize request to server and change state on reducer

---

```js
onAuthStateChanged()
```
This function is responsible to subscribe authorize state change.

##Chat

This saga is responsible to handle action which call chat request to server and and change state on reducer

---

```js
dbCreateChatMessage(action: { type: ChatActionType, payload: any })
```
This function is responsible to send request to server and set on reducer for create chat message.

```js
watchChatMessages(action: { type: ChatActionType, payload: any })
```
This function is responsible to get chat message from server.

```js
watchSetLanguage(action: { type: ChatActionType, payload: any })
```
This function is responsible to watch set chat room language from the server.

```js
watchActivePeerChatRoom(action: { type: ChatActionType, payload: any })
```
This function is responsible to watch active peer chat room from the server.

```js
dbRemoveRoomHistory(action: { type: ChatActionType, payload: any })
```
This function is responsible to remove chat room message history from the server and on reducer.

##Circles

This saga is responsible to handle action which call request to server and and change state on reducer related to circle action

```js
dbFetchCircle(action: { type: CircleActionType, payload: any })
```
This function is responsible to get circle information from server and update to state on reducer.

```js
dbFetchUserTies(action: { type: CircleActionType, payload: any })
```
This function is responsible to get user ties from server and update to state on reducer.

```js
dbFetchUserTieds(action: { type: CircleActionType, payload: any })
```
This function is responsible to get user tieds from server and update to state on reducer.

##Comment

This saga is responsible to handle action which call request to server and and change state on reducer related to comment action

```js
watchFetchComments()
```
This function is responsible to fetch comment from server and update to state on reducer.

##Common

This saga is responsible to handle action which call request to server and and change state on reducer related to common action

```js
clearLoadedData()
```
This function is responsible to clear all loaded data on reducer

```js
loadInitialData()
```
This function is responsible to initialize all data of state from server to update to state on reducer.

```js
loadTwitterMedia(action: { type: GlobalActionType, payload: any })
```
This function is responsible to get twitter data from server and update to state on reducer.

##Gallery

This saga is responsible to handle action which call request to server and and change state on reducer related to gallery action

```js
dbFetchImageGallery(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to fetch image gallery from server and update to state on reducer.

```js
watchFetchAlbumImages(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch fetch album images.

```js
watchFetchAvatarImages(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch fetch avatar images.

```js
watchFetchCoverImages(action: { type: ImageGalleryActionType, payload: any }) 
```
This function is responsible to watch fetch cover images.

```js
watchUploadImage(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch upload image.

```js
watchDeleteImage(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch delete image.

```js
watchUploadVideo(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch upload video.

```js
watchUploadImage(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch upload image.

```js
watchUploadAvatar(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch upload avatar.

```js
watchUploadCover(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch upload cover.

```js
watchCreateAlbum(action: { type: ImageGalleryActionType, payload: any }) 
```
This function is responsible to watch create album.

```js
dbFetchVideoGallery(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to fetch video gallery.

```js
watchDeleteVideo(action: { type: ImageGalleryActionType, payload: any })
```
This function is responsible to watch delete video from gallery.

##Locale

This saga is responsible to handle action which call request to server and and change state on reducer related to locale action

---

```js
initLocalization()
```
This function is responsible to initialize localization.


##Notification

This saga is responsible to handle action which call request to server and and change state on reducer related to notification action

---

```js
dbFetchNotification()
```
This function is responsible to fetch notification from server and update state on reducer.


##Post

This saga is responsible to handle action which call request to server and and change state on reducer related to post action

---

```js
watchFetchPostStream(action: { type: PostActionType, payload: any })
```

This function is responsible to fetch posts from server and update related data to state on reducer.

```js
watchSearchPost(action: { type: PostActionType, payload: any })
```

This function is responsible to search posts on server and update related data to state on reducer.

```js
watchFetchPostByUserId(action: { type: PostActionType, payload: any })
```
This function is responsible to fetch posts by user identifier from server and update related data to state on reducer.

```js
watchFetchAlbumPosts(action: { type: PostActionType, payload: any })
```
This function is responsible to fetch album posts by user identifier from server and update related data to state on reducer.

```js
getPostSearchKey()
```
This function is responsible to fetch search key from server and update related data to state on reducer.


##User

This saga is responsible to handle action which call request to server and and change state on reducer related to user action

---

```js
watchSearchUser(action: { type: UserActionType, payload: any })
```
This function is responsible to watch search user.

```js
watchFindPeople(action: { type: UserActionType, payload: any })
```
This function is responsible to watch find people.

```js
dbFetchUserProfile(action: { type: UserActionType, payload: any })
```
This function is responsible to fetch user profile from server and update related data to state on reducer.

```js
dbFetchUserProfileById(action: { type: UserActionType, payload: any })
```
This function is responsible to fetch user profile by id from server and update related data to state on reducer.

##UserSetting


This saga is responsible to handle action which call request to server and and change state on reducer related to user setting action

---

```js
dbFetchUserSetting(action: { type: UserSettingActionType, payload: any })
```
This function is responsible to fetch user setting from server and update related data to state on reducer.

```js
dbUpdateUserSetting(action: { type: UserSettingActionType, payload: any })
```
This function is responsible to update user setting to server and update related data to state on reducer.

 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.