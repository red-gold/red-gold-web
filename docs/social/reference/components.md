---
title: Components
id: components
sidebar_label: Components
custom_edit_url: https://github.com/red-gold/social-docs/edit/master/docs/reference/actions.md
original_id: components

---

This layer include [React components](https://facebook.github.io/react/docs/react-component.html) that let you split the UI into independent, reusable pieces, and think about each piece in isolation.


AboutDialog
---


Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
open      |boolean          |                       | This variable is to indicate dialog open status
onClose     |function       |                       |Function to close image gallery
theme| any||Theme
currentUser| object| |An object of current user which contain user information such as `avatar`,`fullname`,`email` etc.
targetUser| object||An object of the user to show about which contain all of that user information.
classes     |any       |                       | Contain material UI style of html class
t|any||Translating to locale string
currentLanguage|string|| A variable contains current language code of the component

 AddVideo
---

Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
open      |boolean          |                       | This variable is to indicate add video model open status
onClose|function||This function is to handle closing add video modal
onAddLink|function||This function is to handle add video link
classes|object||Contain material UI style of html class
t|function||Responsible translate to local string

 AlbumDialog
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
uploadImage|function||Repsonsible to upload image to the server
open|bolean||This variable is to indicate album dialog open status
onClose|function||This function is to handle closing image gallery
classes     |any       |                       | Contain material UI style of html class
theme|any||Theme
progress| object ||The state of file progress 
photos | object || Contain information of selected photo
createAlbumRequestStatus|string|| Status of creating album request
currentUser|object| Contain user information of current user
currentAlbum|object||Contain current album post information 
post|function||Responsible to create a post by post object
t|function||Responsible translate to local string

BountiesDialog
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
setHeaderTitle|function||Responsible to set title of the top bar
classes     |any       |                       | Contain material UI style of html class
t|function||Responsible translate to local string
text|string|| Corresponding to the text of button

BountyBox
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
setHeaderTitle|function||Responsible to set title of the top bar
classes     |any       |                       | Contain material UI style of html class
t|function||Responsible translate to local string
caption|string|| Corresponding bounty caption
text|string|| Corresponing to bounty text
image|string|| Corresponing to bounty image
subheader|string|| Corresponing to bounty subheader
value|string|| Corresponing to bounty percentage

Chat
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
open|bolean||This variable is to indicate chat window open status
onToggle|function||This function is to handle toggle open/close chat window
t|function||Responsible translate to local string
recentChatOpen|bolean||This variable is to indicate recent chat open status
openRecentChat|function||This function is to handle opening recent chat
closeRecentChat|function||This function is to handle closing recent chat
receiverUser|object|| A user object which contains the receiver information
removeChatHistory|function||This function is to handle removing chat history
setCurrentChat|function| This function is to handle set current chat
followers|object|| An object contains followers information
chatMessages|object| An object of chat message model
classes     |any       |                       | Contain material UI style of html class
currentUser|object||An object contains current user information
sendMessage|function|| This function is to handle sending message
width|object||Corresponding to control window width in chat
currentChatRoom|object||An object contain chatroom information

ChatBody
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
chatMessages|object||An object of chat message model
classes     |any       |                       | Contain material UI style of html class
currentUser|object| An object contains current user information

ChatMessage
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
loading|boolean|| This variable is to indicate the loading state 
classes     |any       |                       | Contain material UI style of html class
currentUser|object| An object contains current user information
rtl|boolean|| This variable is to indicate chat message direction is right to left
text|string|Corresponding to text message in chat
avatar|string| Corresponding to message owner'savatar address
ownerName|string| Corresponding to message owner's name

ChatRoomSetting
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
open|boolean|| This variable is to indicate add video modal is open
onClose|any||This function is to handle close add video modal
leftSideClose|boolean||This variable is to indicate left side chat is close
rightSideDisabled|boolean|This variable is to indicate right side chat is close
room|object||An object contains information of a chat room
setLanguage|function| This function is to handle setting chat room language
currentUser|object| An object contains current user information

CircleComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
circle|object|| An object corresponding to circle
id|string| This variable is correspoding to circle identifier
uid|string|This variable is correspoding to user identifier
updateCircle|function||This function is to handle updating circle information
deleteCircle|function||This function is to handle deleteing circle
usersOfCircle|object||| A object contains the users of current circle
closeCircleSettings|function| This function is to handle closing setting box of circle
openSetting|boolean|| This variable indicates circle setting dialog is open {true} or not {false}
goTo|function|| This function is to handle changing route location
openCircleSettings|function||This function is to handle opening setting box for a circle

CommentComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
comment|object|| An object contains information of a comment
commentOwner|object||  An object contains user information of comment owner
openEditor|function|| This function is to handle opening profile editor
closeEditor|any|| This function is to handle closing profile editor
isCommentOwner|boolean|| This variable indicates current user is comment owner {true} or not {false}
isPostOwner|boolean|| This variable indicates current user is post owner {true} or not {false}
update|function|| This function is to handle update a comment
delete|function|| This function is to handle delete a comment
getUserInfo|function|| This function is to get user profile
fullName|string||This variable corresponds to user full name
avatar|string|| This variable corresponds to user avatar address
disableComments|boolean|| This variable indicates writing comment on the post is disabled {true} or not {false} 
editorStatus|boolean| This variable indicates whether comment edit is open {true} or not {false} 

CommentGroupComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
comments|object|| An object contains information of comments in a post
commentSlides|object|| An object contains comments information show on preview
postId|string||This variable corresponds to the post identifier which comment belong to
userInfo|object|| An object contains user porfile
open|boolean|| This variable indicates comment group is open {true} or not {false}
disableComments|boolean|| This variable indicates comment is disabled {true} or not {false}
isPostOwner|boolean|| This variable indicates current user is the post owner {true} or not {false}
fullName|string||This variable corresponds to user full name
avatar|string|| This variable corresponds to user avatar address
onToggleRequest|function|| This function is to handle toggle comment list open/close 
ownerPostUserId|string| This variable corresponds to the identifier of post owner
send|function||This function is to handle sending comment
commentsRequestStatus|string|| This variable indicate fetch comments request from the server status

CommentGroupComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
comments|object|| An object contains information of comments in a post
commentsEditorStatus|object|This object indicate each comment editor status
isPostOwner|boolean|| This variable indicates current user is the post owner {true} or not {false}
postId|string|| This variable indicates the post identifier comments belong to
disableComments|boolean|| This variable indicates comment on the post is disabled {false} or not {true}

DialogTitle
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
buttonLabel|string|| This variable corresponds to the label of button
title|string|| This variable corresponds to the title of dialog
disabledButton|boolean|| This variable indicates button is disabled {true} or not {false}
onClickButton|function|| This function is triggered when button is clicked
onRequestClose|function|| This function is triggered to close request event

EditProfileComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
info|object||An object contains user information
banner|string|| This variable corresponds to user profile banner addresss
avatar|string|| This variable corresponds to user avatar address
fullName|string|| This variable corresponds to user full name
open|boolean|| This variable indicates edit profile dialog is open {true} or not {false} 
update|function||This function is to handle updating user profile
uploadAvatar|function||This function is to handle uploading user avatar
uploadCover|function||This function is to handle uploading user cover
avatarImages|list|| This list contains avatars of user
coverImages|list|| This list contains covers of user
loadAvatarList|function|| This function is to handle loading avatar list
loadCoverList|function|| This function is to handle loading cover list
onRequestClose|function|| This function is triggered to close request event
currentLanguage|string|| This variable corresponds to current locale language

FindPeopleComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
loadPeople|function||This function is to handle loading users' profile
page|number|| This number corresponds to current page number
increasePage|function||This function is to handle increasing page
peopleInfo|list|| This list contains users' information
hasMorePeople|boolean|| This variable indicates whether there are more people {true} or not {false}

FollowDialogComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
userId|string|| This variable corresponds to current user identifier
user|object|| An object contains current user information
circles|object|| An object contains circles' information of current user
userBelongCircles|list| This list contains circles' id which current user belong to
isFollowed|boolean|| This variable indicates whether current user followed this user
belongCirclesCount|number|| This variable corresponds to the number of circles which current user belong to
firstBelongCircle|object|| An object of first circle which current user belong to
avatar|string|| This variable corresponds to current user avatar address
fullName|string|| This variable corresponds to current user fullname
followingCircle|object| An object contains the following circle identifier of current user
createCircle|function|| This function is to handle creating a circle
addUserToCircle|function|| This function is to handle adding user to a circle
followUser|function|| This function is to handle adding referer user to the following circle of current user
deleteFollowingUser|function|| This function is to handle deleting following user
setSelectedCircles|function|| This function is to handle setting current user selected circles for referer user
removeSelectedCircles|function|| This function is to handle removing current user selected circles for referer user 
openSelectCircles|function||  This function is to handle opening selected circle box
closeSelectCirclesfunction||  This function is to handle closing selected circle box
goTo|function|| This function is to handle redirecting page to a specific url
followRequest|string|| This variable indicates the status of following user server request
addToCircleRequest|string|| This variable indicates the status of add to circle user server request
deleteFollowingUserRequest |string|| This variable indicates the status of deleting user server request
selectedCircles|list|| This list contains keep selected circles information for refere user
isSelecteCirclesOpen|boolean|| This variable indicates whether the select circles box for referer user is open

FollowersComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
followers|list|| This list contains user followers' information


FollowingComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
followingUsers|list|| This list contains user followings' information

HomeHeaderComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|function||Responsible translate to local string
classes     |any       |                       | Contain material UI style of html class
drawerStatus|boolean|| This variable indicates whether sidebar is open {true} or not {false}
logOut|function|| This function is to handle user log out event
handleResize|function|| This function is to handle on resize window event 
notifyCount|number|| This variable corresponds to number of notifications
fullName|string|| This variable corresponds to user fullname
location|string|| This variable corresponds to location of user
history|string|| This variable corresponds to history router of user
avatar|string|| This variable corresponds to user's avatar url address
title|string|| This variable corresponds to top bar title
onToggleDrawer|function|| This function is to handle sidebar toggle
setCurrentChat|function|| This function is to handle setting current chat
goTo|function|| This function is to handle redirecting to a specific url
width|any||This variable corresponds to window width
theme|any||This variable corresponds to the theme
recentChatOpen|boolean|| This variable indicates whether recent chat is open {true} or not {false}
closeRecentChat|any|| This function is to handle closing recent chat
openRecentChat|any|| This function is to handle opening recent chat

ImageEditorComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
link|string|| This variable corresponds to image link
disabledOk|boolean|| This variable indicates whether OK button is disabled {true} or not {false}
loading|boolean|| This variable indicates whether loading is enabled {true} or not {false}

ImageGalleryComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--

ImgComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
isImageLoaded|boolean|| This variable indicates whether image is loaded {true} or not {false}

ImgCoverComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
isImageLoaded|boolean|| This variable indicates whether image is loaded {true} or not {false}

MasterLoadingComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--

NotifyComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
notifications|object|| An object contains notifications information
info|object||  An object contains current user information
onRequestClose|function|| This function is triggered after a request event 
open|boolean|| This variable indicates user notifications popover is open {true} or not {false}
anchorEl|any|| This variable corresponds to keep element
classes     |any       |                       | Contain material UI style of html class
t|any||Translating to locale string

NotifyItemComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--

classes     |any       |                       | Contain material UI style of html class
description|string||This variable corresponds to notification description
fullName| string||This variable corresponds to user's full name
avatar|string||This variable corresponds to user's avatar
isSeen|boolean|| This variable indicates notification has seen {true} or not {false}
id|string|| This variable corresponds to notification identifier
goTo|function|| This function is to handle redirecting to a specific url
closeNotify|function||  This function is to handle closing a notification
notifierUserId|string|| This variable corresponds to notifier identifier
url|string|| This variable corresponds to the URL which notification mention
deleteNotiy|function|| This function is to handle deleting notification
seenNotify|function|| This function is to handle changing notification status to has seen

PhotoAlbumComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|any||Translating to locale string
classes     |any       |                       | Contain material UI style of html class
match|function|| This variable corresponds to router match
search|function|| This function is to handle searching posts inside photo album
history| string|| This variable corresponds to history of the album
location|string|| This variable corresponds to location of the album
requestId|string|| This variable corresponds to  stream request id for the album
homeTitle|string|| This variable corresponds to title of the top bar
searchRequestStatus|string|| This variable indicates search request status
currentUser|object|| An object contains current user information
loadPosts|function|| This function is to handle loading the data from stream
hasMorePosts|boolean||This variable indicates if there is more post {true} or not {false}
posts|object|| An object contains posts' information from stream

PhotoStreamComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|any||Translating to locale string
classes     |any       |                       | Contain material UI style of html class
match|function|| This variable corresponds to router match
history| string|| This variable corresponds to history of the album
location|string|| This variable corresponds to location of the album
requestId|string|| This variable corresponds to  stream request id for the album
homeTitle|string|| This variable corresponds to title of the top bar
deleteImage|function|| This function is to handle deleting image in album
onDelete |function|| This function is triggered when image is deleted
currentUser|object|| An object contains current user information
currentAlbum|object|| An object contains current album information
loadPhotos|function|| This function is to handle fetching the data by paging
hasMorePhotos|boolean||This variable indicates if there is more photo {true} or not {false}
images|list|| This list contains images from stream

PhotoStreamComponent
---
Name    |Type               |Default                | Desciption
--      |--                 |--                     |--
t|any||Translating to locale string
classes     |any       |                       | Contain material UI style of html class
post|object|| An object contains information of a post
avatar|string|| This variable corresponds to user avatar url
fullName|string||This variable corresponds to user fullname
voteCount|number||This variable corresponds to number of vote on a post
currentUserVote|boolean||This variable indicates current user vote the post {true} or not {false}
isPostOwner|boolean||This variable indicates current user is the owner of the post {true} or not {false}
vote|function|| This function is to handle voting a post
unvote|function|| This function is to handle reomoving a vote of post
delete|function|| This function is to handle reomoving a post
toggleDisableComments|function|| This function is to handle toggling comment disable/enable
toggleSharingComments |function|| This function is to handle toggling  sharing disable/enable
goTo|function|| This function is to handle redirecting page to a specific url
setHomeTitle|function|| This function is to handle changing title of top bar
getPostComments|function|| This function is to handle fetching the comments of a post
commentList|list|| This list contains all comments of a post





















 > ⭐️ This page needs help. Please help with your contribution. To start click on edit button.