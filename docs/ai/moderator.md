---
id: moderator
title: Moderator
sidebar_label: Moderator
custom_edit_url: https://github.com/red-gold/red-gold-web/edit/master/docs/reference/actions.md
original_id: moderator
---


## Red Gold Moderator

Red gold moderator is AI service to prevent inappropriated, fraud content from the system. Red gold moderator provides: 

### Indevice moderation

Red gold AI service is deployed directly in edge device, which means all AI based decision making processes are transparent. User can understand the inferred labels of their contents either culture score (evaluate the appropriate level of the content), sentiment (evaluate the emotional affect of the content), topics (the category of the content)  to the targeted group/community. 

|                | Community version |   Enterprise version   |
|----------------|-------------------|--------------------------|
| sentiment      | yes               | yes                      |
| topics         | yes               | yes                      |
| bot detection  | no                | yes                      |
| culture score  | no                | yes                      |

### Learning from group voting data

Data and groundtruth labels are selected by community via voting. Then the voted outcome is used to train the AI model. To enable that process, the Our AI solution design to adopt federated learning that allow AI models can be learned from decentrial data sourse. 

|                         | Community version |   Enterprise version   |
|-------------------------|-------------------|--------------------------|
| learning sentiment      | no                | yes                      |
| learning topics         | no                | yes                      |
| bot detection           | no                | yes                      |
| learning culture score  | no                | yes                      |


