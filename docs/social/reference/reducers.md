---
title: Reducers
id: reducers
sidebar_label: Reducers
custom_edit_url: https://github.com/red-gold/social-docs/edit/master/docs/reference/actions.md
original_id: reducers
---

This layer is included reducers of entities. [Reducers](http://redux.js.org/docs/basics/Reducers.html) specify how the application's state changes in response.

## Authorize

This reducer is responsible to change user authorization state on reducer.

---

```js
AuthorizeActionType.LOGIN
```
This action is responsible to update login state on reducer.

```js
AuthorizeActionType.LOGOUT
```
This action is responsible to set `uid` state to zero, deactivate `authed` and `isVerifide` state and activate `guest` state on reducer.

```js
AuthorizeActionType.SIGNUP
```
This action is responsible to set `uid` state with user id on reducer.

```js
AuthorizeActionType.UPDATE_PASSWORD
```
This action is responsible to update state on reducer when update password. 

## Chat

This reducer is responsible to change chat state on reducer, open/close/set chat, chat history and recent chat.

----

```js
ChatActionType.ADD_CHAT_ROOM_MESSAGES
```
This action is responsible to update `chatMessage` and `chatRoomId` to state on reducer

```js
ChatActionType.REMOVE_CHAT_HISTORY
```
This action is responsible to remove chat history of `roomId` state on reducer. 

```js
ChatACtionType.OPEN_CHAT
```
This action is responsible to activate `chatOpen` state on reducer.

```js
ChatActionType.CLOSE_CHAT
```
This action is responsible to deactivate `chatOpen` state on reducer.

```js
ChatActionType.OPEN_RECENT_CHAT
```
This action is responsible to activate `rencentChatOpen` state on reducer

```js
ChatActionType.CLOSE_RECENT_CHAT
```
This action is to responsible to deactivate `recentChatOpen` state on reducer

```js
ChatActionType.SET_CURRENT_CHAT
```
This action is to responsible to set `chatRoom` state and active `chatOpen` state on reducer

```js
ChatActionType.CLEAR_ALL_CHAT_MESSAGE
```
This action is responsible to clear all chat mesage in reducer. 

## Circle

This reducer is responsible to change user's circle state on reducer, insert/update/delete circle and insert/update/delete follower/following.

---

```js
CircleActionType.CLEAR_ALL_CIRCLES
```
This action is responsible to clear all the circle on reducer

```js
CircleActionType.ADD_CIRCLE
```
This action is responsible to add a new circle to `circleList` state on reducer.

```js
CircleActionType.UPDATE_CIRCLE
```
This action is responsible to update a circle in `circleList` state on reducer.

```js
CircleActionType.DELETE_CIRCLE
```
This fucntion is responsible to delete a circle in `circleList` state on reducer.

```js
CircleActionType.ADD_LIST_CIRCLE
```
This action is responsible to update circles  in `circleList` state on reducer.

```js
CircleActionType.ADD_FOLLOWING_USER
```
This action is responsible to add following user to a circle by update `userTies` state and `selectedCircles` state on reducer.

```js
CircleActionType.UPDATE_USER_TIE
```
This action is responsible to update `userTies` state on reducer.

```js
CircleActionType.ADD_USER_TIED_LIST
```
This action is responsible to add user ties list to `userTieds` state on reducer.

```js
CircleActionType.DELETE_USER_FROM_CIRCLE
```
This action is responsible to delete a user from circle by removing userId in `userTies` state and `circleIdList` state on reducer.

```js
CircleActionType.DELETE_FOLLOWING_USER
```
This action is responsible to delete a following user by deleting user id in `userTies` state and `selectedCircles` state on reducer.

```js
CircleActionType.CLOSE_CIRCLE_SETTINGS
```
This action is responsible to close circle setting by deactivating `openSetting` state on reducer.

```js
CircleActionType.OPEN_CIRCLE_SETTINGS
```
This action is responsible to open circle setting by activating `openSetting` state on reducer.

```js
CircleActionType.SHOW_SELECT_CIRCLE_BOX
```
This action is responsible to show circle box by activating `selectCircleStatus` state on reducer.

```js
CircleActionType.HIDE_SELECT_CIRCLE_BOX
```
This action is responsible to hide circle box by deactivating `selectCircleStatus` state on reducer.

```js
CircleActionType.SHOW_FOLLOWING_USER_LOADING
```
This action is responsible to show following user by activating `followingLoadingStatus` state on reducer.

```js
CircleActionType.HIDE_FOLLOWING_USER_LOADING
```
This action is responsible to show following user by deactivating `followingLoadingStatus` state on reducer.

```js
CircleActionType.SET_SELECTED_CIRCLES_USER_BOX_COMPONENT
```
This action is responsible to set `selectedCircles` state with list of circle on reducer.

```js
CircleActionType.REMOVE_SELECTED_CIRCLES_USER_BOX_COMPONENT
```
This action is responsible to remove `selectedCircles` state on reducer.

```js
CircleActionType.OPEN_SELECT_CIRCLES_USER_BOX_COMPONENT
```
This action is responsible to open selected circles user box  by activating `openSelecteCircles` state on reducer.

```js
CircleActionType.CLOSE_SELECT_CIRCLES_USER_BOX_COMPONENT
```
This action is responsible to close selected circles user box  by activating `openSelecteCircles` state on reducer.


## Comment

This reducer is responsible to change user comment state on reducer, insert/update/delete comment.

---

```js
CommentActionType.ADD_COMMENT
```
This action is responsible to add a comment in `postComments` state on reducer.

```js
CommentActionType.UPDATE_COMMENT
```
This action is responsible to update a comment in `postComments` state on reducer.

```js
CommentActionType.DELETE_COMMENT
```
This action is responsible to delete a comment in `postComments` state on reducer.

```js
CommentActionType.CLOSE_COMMENT_EDITOR
```
This action is responsible to close comment editor by deactiavting `editorStatus` state on reducer.

```js
CommentActionType.OPEN_COMMENT_EDITOR
```
This action is responsible to open comment editor by actiavting `editorStatus` state on reducer.

```js
CommentActionType.CLEAR_ALL_DATA_COMMENT
```
This action is responsible to clear all `comment` state on reducer.

## Global

This reducer is responsible to change global states on reducer. Like changing loding visibility or notification text.

---

```js
GlobalActionType.PROGRESS_CHANGE
```
This action is responsible to set `progress` state on reducer.

```js
GlobalActionType.PROGRESS_CHANGE_WITH_KEY
```
This action is responsible to set `progress` state by key on reducer.

```js
GlobalActionType.DEFAULT_DATA_DISABLE
```
This action is responsible to activate `defaultLoadDataStatus` state on reducer.

```js
GlobalActionType.SHOW_MESSAGE_GLOBAL
```
This action is responsible to deactivating `defaultLoadDataStatus` state on reducer.

```js
GlobalActionType.SHOW_NORMAL_MESSAGE_GLOBAL
```
This action is responsible to set `message` state and activate `messageOpen` state on reducer.

```js
GlobalActionType.HIDE_MESSAGE_GLOBAL
```
This action is responsibe to set `message` state, deactivate `messageOpen`
state and clear `messageColor` state on reducer.

```js
GlobalActionType.SET_HEADER_TITLE
```
This action is responsible to set `headerTitle` state on reducer.

```js
GlobalActionType.OPEN_DIALOG
```
This action is responsible to activate `dialog` state by type on reducer.

```js
GlobalActionType.CLOSE_DIALOG
```
This action is responsible to deactivate `dialog` state by type on reducer.

```js
GlobalActionType.SHOW_SEND_FEEDBACK
```
This action is responsible to activate `sendFeedbackStatus` state on reducer.

```js
GlobalActionType.HIDE_SEND_FEEDBACK
```
This action is responsible to deactivate `sendFeedbackStatus` state on reducer.

```js
GlobalActionType.HIDE_TOP_LOADING
```
This action is responsible to set `topLoadingQueue` state and deactive `showTopLoading`state according to `topLoadingQueue` on reducer.

```js
GlobalActionType.SHOW_TOP_LOADING
```
This action is responsible to set `topLoadingQueue` state and active `showTopLoading`state on reducer.

```js
GlobalActionType.HIDE_MASTER_LOADING
```
This action is responsible to set `masterLoadingQueue` state and deactive `showMasterLoading` state according to `masterLoadingQueue`on reducer

```js
GlobalActionType.SHOW_MASTER_LOADING
```
This action is responsible to set `masterLoadingQueue` state and deactive `showMasterLoading` state according to `masterLoadingQueue`on reducer

```js
GlobalActionType.TEMP
```
This action is responsible to set `temp.caller` state on reducer.

```js
GlobalActionType.CLEAR_ALL_GLOBAL
```
This action is responsible to clear `sendFeedbackStatus` state on reducer. 

## ImageGallery

This reducer is responsible to change images state on reducer, insert/update/delete image and cache image's url.

---

```js
ImageGalleryActionType.ADD_IMAGE
```
This action is responsible to add image to `entities` state based on image id on reducer.

```js
ImageGalleryActionType.ADD_IMAGE_LIST:
```
This action is responsible to add list of image to `entities` state and activate `loaded` state on reducer.

```js
ImageGalleryActionType.ADD_ALBUM_IMAGE_LIST
```
This action is responsible to add list of album to `album` state based on album id and activate `loaded` state on reducer.

```js
ImageGalleryActionType.ADD_AVATAR_IMAGE_LIST
```
This action is responsible to add avatar to `avatar` state based on avatar user id and activate `loaded` state and activate `loaded` state on reducer.

```js
ImageGalleryActionType.ADD_COVER_IMAGE_LIST
```
This action is responsible to add cover image list to `cover` state based on user id and activate `loaded` state on reducer.

```js
ImageGalleryActionType.HAS_MORE_DATA_ALBUM_IMAGE
```
This action is responsible to activate `hasMoreData` state on reducer.

```js
ImageGalleryActionType.NO_MORE_DATA_ALBUM_IMAGE
```
This action is responsible to deactivate `hasMoreData` state on reducer.

```js
ImageGalleryActionType.LAST_ALBUM_IMAGE_ID
```
This action is responsible to set `lastImageId` state with image id on reducer.

```js
ImageGalleryActionType.ADD_ALBUM_ID_LIST:
```
This action is responsible to update `entites` state and activate `loaded` state on reducer.

```js
ImageGalleryActionType.DELETE_IMAGE
```
This action is responsible to delete `entities` state on reducer.

```js
ImageGalleryActionType.SET_IMAGE_URL
```
This action is responsible to set `imageURLList` state on reducer.

```js
ImageGalleryActionType.ADD_VIDEO_GALLERY
```
This action is responsible to update `videos`state on reducer.

```js
ImageGalleryActionType.ADD_VIDEO_LIST_GALLERY
```
This action is responsible to set `videos` state and activate `loaded` state on reducer.

```js
ImageGalleryActionType.DELETE_VIDEO
```
This action is responsible to update `videos` state by filtering deleleted video on reducer

```js
ImageGalleryActionType.SEND_IMAGE_REQUEST
```
This action is responsible to update `imageRequests` state on reducer.

```js
ImageGalleryActionType.CLEAT_ALL_DATA_IMAGE_GALLERY
```
This action is responsible to clear all data on reducer.

## Notification

This reducer is responsible to change user notification state on reducer, insert/update/delete notificaion and change seen state for notification.

---

```js
NotificationActionType.ADD_NOTIFY
```
This action is responsible to return current state on reducer.

```js
NotificationActionType.ADD_NOTIFY_LIST
```
This action is responsible to set `userNotifies` state and activate `loaded` state on reducer.

```js
NotificationActionType.SEEN_NOTIFY
```
This action is responsible to activate `isSeen` state and activate `loaded` state on reducer.

```js
NotificationActionType.DELETE_NOTIFY
```
This action is responsible to delete data in `userNotifies` state based on payload on reducer.

```js
NotificationActionType.CLEAR_ALL_DATA_NOTIFY
```
This action is responsible to clear all data on reducer.
## Post

This reducer is responsible to change user post state on reducer, insert/update/delete post.

----

```js
PostActionType.CLEAR_ALL_DATA_POST
```
This action is responsible to clear all data on reducer.

```js
PostActionType.SET_POST_SEARCH_KEY
```
This action is responsible to set `searchKey` state on redcuer.

```js
PostActionType.ADD_IMAGE_POST
```
This action is responsible to set `entities` state by post id on reducer.

```js
PostActionType.ADD_POST
```
This action is responsible to set `entities` state by post id on reducer.

```js
PostActionType.UPDATE_POST
```
This action is responsible to update `entities` state based on post id on reducer.

```js
PostActionType.UPDATE_POST_COMMENTS
```

This action is responsible to update `comments` state by post id and update `counters` state of a post on reducer.

```js
PostActionType.UPDATE_POST_VOTES
```

This action is responsible to update `votes` state and update `score` state of a post by post id on reducer.

```js
PostActionType.DELETE_POST
```
This action is responsible to delete post by id inside `entities` state and activate `loaded` state on reducer.

```js
PostActionType.ADD_LIST_POST
```
This action is responsible to update `entities` state with list of post item and activate `loaded` state on reducer

```js
PostActionType.ADD_LIST_STREAM_POST
```
This action is responsible to update `stream.list` state and activate `loaded` state on reducer.

```js
PostActionType.ADD_LIST_SEARCH_POST
```
This action is responsible to set `search.list` state and activate `loaded` state on reducer.

```js
PostActionType.HAS_MORE_POST_SEARCH
```
This action is responsible to activate `search.hasMoreData` state on reducer.

```js
PostActionType.NO_MORE_POST_SEARCH
```
This action is responsible to deactivate `search.hasMoreData` state on reducer.

```js
PostActionType.ADD_LIST_POST_INSTAGRAM
```
This action is responsible to append data in `instagram` state on reducer.

```js
PostActionType.HAS_MORE_DATA_STREAM
```
This action is responsible to activate `stream.hasMoreData` state on reducer.

```js
PostActionType.NOT_MORE_DATA_STREAM
```
This action is responsible to deactivate `stream.hasMoreData` state on reducer.

```js
PostActionType.SET_PAGE_STREAM
```
This action is responsible to set `stream.LastPageRequest` state on reducer.

```js
PostActionType.INCREASE_PAGE_STREAM
```
This action is responsible to set and update `stream.LastPageRequest` state on reducer.

```js
PostActionType.LAST_POST_STREAM
```
This action is responsible to set `stream.lastPostId` state on reducer.

```js
PostActionType.LAST_POST_SEARCH
```
This action is responsible to set `search.lastPostId` state on reducer.

## Server

This reducer is responsible to handle request state on reducer.

----

```js
ServerActionType.ADD_REQUEST
```
This action is responsible to set `request` state based on request id on reducer.

```js
ServerActionType.DELETE_REQUEST
```
This action is responsible to delete `request` state based on request id on reducer.

```js
ServerActionType.ERROR_REQUEST
```
This action is responsible to set `status` state with `ServerRequestStatusType.Error` based on request id on reducer.

```js
ServerActionType.OK_REQUEST:
```
This action is responsible to set `status` state with `ServerRequestStatusType.OK` based on request id on reducer.

```js
ServerActionType.CLEAR_ALL_DATA_REQUEST
```
This action is responsible to clear all request data on reducer.


## User

This reducer is responsible to change user information state on reducer, insert/update/delete user information.

---

```js
UserActionType.SET_USER_SEARCH_KEY
```
This action is responsible to set `searchKey` state on reducer.

```js
UserActionType.USER_INFO
```
This action is responsible to add user info to `entities` state based on user id on reducer

```js
UserActionType.ADD_USER_INFO:
```
This action is responsible to add user info to `entities` state based on user id and activate `loaded` state on reducer

```js
UserActionType.ADD_PROFILE_LIST_POST
```
This action is responsible to update `list` state in `postId` state with list of post id based on user id  and activate `loaded` state on reducer.

```js
UserActionType.ADD_PEOPLE_INFO
```
This action is responsbile to update `entities` state on reducer.

```js
UserActionType.ADD_USER_SEARCH
```
This action is responsible to set `search.list` state if it is overwrote or update `search.list` state on reducer.

```js
UserActionType.ADD_FIND_PEOPLE
```
This action is responsible to update `findPeople.list` state on reducer.

```js
UserActionType.UPDATE_USER_INFO
```
This action is responsible to update user info in `entities` state based on user id on reducer.

```js
UserActionType.CLEAR_ALL_DATA_USER
```
This action is responsible to clear all user data on reducer.

```js
UserActionType.HAS_MORE_DATA_PROFILE
```
This action is responsible to activate `hasMoreData` state inside `post` state based on user id on reducer.

```js
UserActionType.NOT_MORE_DATA_PROFILE
```
This action is responsible to deactivate `hasMoreData` state inside `post` state based on user id on reducer.

```js
UserActionType.REQUEST_PAGE_PROFILE
```
This action is responsible to set `lastPageRequest` state inside `post` state based on user id on reducer.

```js
UserActionType.LAST_POST_PROFILE
```
This action is responsible to set `lastPostId` state inside `post` state based on user id pn reducer.

```js
UserActionType.ADD_PROFILE_LIST_ALBUM
```
This action is responsible to update `list` state inside `album` state based on user id on reducer.

```js
UserActionType.INCREASE_PAGE_ALBUM
```
This action is responsible to update `lastPageRequest` inside `album` state based on user id by adding 1 on reducer.

```js
UserActionType.HAS_MORE_DATA_ALBUM
```
This action is responsible to activate `hasMoreData` state inside `album` state based on user id on reducer.

```js
UserActionType.NOT_MORE_DATA_ALBUM
```
This action is responsible to deactivate `hasMoreData` state inside `album` state based on user id on reducer.

```js
UserActionType.REQUEST_PAGE_ALBUM
```
This action is responsible to set `lastPageRequest` state inside `album` state based on user id on reducer.

```js
UserActionType.LAST_POST_ALBUM
```
This action is responsible to `lastPostId` state inside `album` state based on user id on reducer.

```js
UserActionType.CLOSE_EDIT_PROFILE
```
This action is responsible to deactivate `openEditProfile` state on reducer.

```js
UserActionType.OPEN_EDIT_PROFILE
```
This action is responsible to activate `openEditProfile` state on reducer.

```js
UserActionType.HAS_MORE_PEOPLE_SEARCH
```
This action is responsible to activate `search.hasMoreData` state on reducer.

```js
UserActionType.NOT_MORE_PEOPLE_SEARCH
```
This action is responsible to deactivate `search.hasMoreData` state on reducer.

```js
UserActionType.HAS_MORE_FIND_PEOPLE
```
This action is responsible to activate `findPeople.hasMoreData` state on reducer.

```js
UserActionType.NOT_MORE_FIND_PEOPLE
```
This action is responsible to deactivate `findPeople.hasMoreData` state on reducer.

```js
UserActionType.SET_FIND_PEOPLE_PAGE
```
This action is responsible to set `findPeople.page` state on reducer.

```js
UserActionType.INCREASE_FIND_PEOPLE_PAGE
```
This action is responsible to increase `findPeople.page` state by 1 on reducer.

```js
UserActionType.LAST_USER_PEOPLE
```
This action responsible to set `findPeople.lastUserId` state on reducer.


```js
UserActionType.INCREASE_FOLLOWING_COUNT_USER
```
This action is responsible to increase `followCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.DECREASE_FOLLOWING_COUNT_USER
```
This action is responsible to decrease `followCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.INCREASE_VOTE_COUNT_USER
```
This action is responsible to increase `voteCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.DECREASE_VOTE_COUNT_USER
```
This action is responsible to decrease `voteCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.INCREASE_POST_COUNT_USER
```
This action is responsible to increase `postCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.DECREASE_POST_COUNT_USER
```
This action is responsible to decrease `postCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.INCREASE_SHARE_COUNT_USER
```
This action is responsible to increase `shareCount` state inside `entities` state by 1 on reducer.

```js
UserActionType.DECREASE_SHARE_COUNT_USER
```

This action is responsible to decrease `shareCount` state inside `entities` state by 1 on reducer.

## UserSetting

This reducer is responsible to set and clear user setting.

----

```js
UserSettingActionType.SET_USER_SETTING
```
This action is responsible to set user setting on reducer.

```js
UserSettingActionType.CLEAR_ALL_USER_SETTING
```
This action is responsible to clear all user setting on reducer.

## Vote


This reducer is responsible to change user vote state on reducer. insert/update/delete vote.

----

```js
VoteActionType.ADD_VOTE
```
This action is responsible to set `postVotes` state based on post id and user id on reducer.

```js
VoteActionType.ADD_VOTE_LIST
```
This action is responsibe to set `postVotes` state with vote list and activate `loaded` state on reducer.

```js
VoteActionType.DELETE_VOTE
```
This action is responsible to delete `postVotes` state based on post id and user id on reducer.

```js
VoteActionType.CLEAR_ALL_DATA_VOTE
```
This action is responsible to clear all votes data on reducer.


 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.