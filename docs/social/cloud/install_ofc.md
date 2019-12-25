---
title: Install on OpenFaaS Cloud
id: install_ofc
sidebar_label: Install on OpenFaaS Cloud
custom_edit_url: https://github.com/red-gold/red-gold-web/edit/master/docs/social/cloud/install_ofc.md
original_id: admin_page
---


## Easy steps from OpenFaaS to your own Telar Social Media on cloud.
By the end of this article you have your own [Telar Social](https://telar.press) media up and running using OpenFaaS on OpenFaaS Cloud through some easy steps **in a nutshell**. 


### Who is this project for
If you are looking for a social media...

- Designed for different purpose, social network, social review, image sharing, video sharing, community blog, discussion or sharing economy network
- Easy to setup and develop.
- Open source.
- Running on public cloud, private cloud or on premises.
- Built base on Domain Driven Design architecture for microservice/cloud functions.
- Running on Kubernetes.
- High performance and at scale.

### Why OpenFaaS
OpenFaaS makes it easy for developers to deploy functions and microservices to Kubernetes without repetitive, boiler-plate coding. Package your code or an existing binary in a Docker image to get a highly scalable endpoint with auto-scaling and metrics.

 - Write functions in any language for Linux or Windows and package in Docker/OCI image format.
 - Portable - runs on existing hardware or public/private cloud - Kubernetes and Docker Swarm native.
 - Auto-scales as demand increases.

 ### Why run the project on OpenFaaS Cloud
 OpenFaaS Cloud introduces an automated build and management system for your Serverless functions with native integrations into your source-control management system whether that is GitHub or GitLab.

With OpenFaaS Cloud functions are managed through typing git push which reduces the tooling and learning curve required to operate functions for your team. As soon as OpenFaaS Cloud receives a push event from git it will run through a build-workflow which clones your repo, builds a Docker image, pushes it to a registry and then deploys your functions to your cluster. Each user can access and monitor their functions through their personal dashboard.


### ingredients 🍲🍜 
For running this project (for Development purpose) all the ingredients have free usage plan to test the project.
- [OpenFaaS CLI](https://github.com/openfaas/faas-cli#get-started-install-the-cli) installed on your computer. (Framework)
- Access to the [OpenFaaS Cloud: Community Cluster](https://github.com/openfaas/community-cluster), or your own self-hosted cluster with [ofc-bootstrap](https://github.com/openfaas-incubator/ofc-bootstrap). (Cloud)
- [MongoDB](https://www.mongodb.com/) database connection string and password. (Database)
- [Heroku](https://www.heroku.com/) account. (Websocket server)
- [Google](https://account.google.com/) account. (Firebase Storage and Recaptcha)
- [Redislabs](https://redislabs.com/) account. (Caching data)


### Get Started🏃🏻
After you have your ingredients ready, we will start to setup Telar Social on OpenFaaS cloud.

### Clone Telar Social on your computer
Telar social including :
**Telar Web** designed for handling authentication, notifications, realtime actions, file storage and admin services.
**Telar Social Serverless** handling posts, comments, votes, social community and media services.
**Telar Social User Interface** is the frontend that using ReactJS. 

> You need to clone these three repositories on your computer following blow instructions.

#### Clone Telar Web
1. Fork the [telar-web](https://github.com/red-gold/telar-web) repository on Github for you account.
2. Clone your fork to your local machine. Replace `[your_github_username]` with your github username.

```
git clone git@github.com:[your_github_username]/telar-web.git
```

#### Clone Telar Social Serverless
1. Fork the [ts-serverless](https://github.com/red-gold/ts-serverless) repository on Github for you account.
2. Clone your fork to your local machine. Replace `[your_github_username]` with your github username.

```
git clone git@github.com:[your_github_username]/ts-serverless.git
```

#### Clone Telar Social User Interface
1. Fork the [ts-ui](https://github.com/red-gold/ts-ui) repository on Github for you account.
2. Clone your fork to your local machine. Replace `[your_github_username]` with your github username.

```
git clone git@github.com:[your_github_username]/ts-ui.git
```

#### Enable CI/CD for repositories
1. Go to your Github account setting and Installed GitHub Apps, click on OpenFaaS Cloud Community Cluster Config button
2. From repository access choose `telar-web`, `ts-serverless`, `ts-ui` repositories.

### OpenFaaS Cloud configuration
You need set your `Github username` which you registered for OpenFaaS Cloud: Community Cluster account in  .
 - From `root` of `ts-serverless` project go to `config` directory. Open app `gateway_config.yml` file.
 - Replace your `Github username` with `[your_github_username]` in :
    * gateway: "https://[your_github_username].o6s.io"
    * origin: "https://[your_github_username].o6s.io"
    * web_domain: "https://[your_github_username].o6s.io"
    * external_domain: "https://[your_github_username].o6s.io"
    * cookie_root_domain: ".o6s.io"
    * external_redirect_domain: "https://[your_github_username].o6s.io/auth"
 
 `https://[your-github-username].o6s.io/`. In my case the `[your-github-username]` is red-gold (`https://red-gold.o6s.io/`)
 - Do the same for `telar-web` project too.


#### Prerequire for creating secret file 🙊
There is a great feature in `faas-cli` which you can encrypt/seal secrets so that you can publish it to your public GitHub repository.
Each secret use a public key to be sealed. As we are using `OpenFaaS Cloud: Community Cluster` we need to use community cluster public key to seal the secret.
To seal your secret `faas-cli` is using [kubeseal](https://github.com/bitnami-labs/sealed-secrets). Following [document](https://github.com/openfaas/faas-cli#openfaas-cloud-extensions) to install kubeseal.

```
faas-cli cloud seal --download
```

Download the official OpenFaaS Cloud certificate.

```
 kubeseal --fetch-cert --controller-name ofc-sealedsecrets-sealed-secrets > pub-cert.pem
```

### Other configurations

Open a text file, following blow environment variables, replace `[your_{variable}]` with your variable value through the steps:

```
MONGO_PWD=[your_mongodb_password] RECAPTCHA_KEY=[your_recaptcha_key] CLIENT_SECRET=[your_github_client_secret] REDIS_PWD='no-value' ADMIN_USERNAME=[your_admin_username] ADMIN_PASSWORD=[your_admin_password] PAYLOAD_SECRET=[your_payload_secret] REF_EMAIL_PASS=[your_email_password] PHONE_AUTH_TOKEN='no-value' PHONE_AUTH_ID='no-value'
```

1. Create an internal trust secret
This secret will be used by each when a function calls another function internally.

```
PAYLOAD_SECRET=$(head -c 12 /dev/urandom | shasum| cut -d' ' -f1)
```

2. Create a [Firebase Storage](https://firebase.google.com/docs/storage) secret.
- [Create a new project in Firebase.](https://www.youtube.com/watch?v=6juww5Lmvgo)
- [Create a default Storage bucket](https://firebase.google.com/docs/storage/web/start#create-default-bucket). From the navigation pane of the Firebase console, select Storage, then click Get started.
- In the Firebase console, open Settings > [Service Accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).
- Click Generate New Private Key, then confirm by clicking Generate Key.
- Aftar download, change the file name to `serviceAccountKey.json`.
- Copy `serviceAccountKey.json` file in the `telar-web` root directory.
- Set the bucket name(bucket_name) in `telar-web/config/storage_config.yml` file to your firebase bucket name. Following pattern `[your_firebase_project_name].appspot.com` in my case my project name is `resume-web-app` so the bucket name will be `resume-web-app.appspot.com`.
3. [Create a cluster and database on Mongodb cloud](https://docs.atlas.mongodb.com/getting-started/#deploy-a-free-tier-cluster).
- From root of `telar-web` project go to `config` directory. Open app `app_config.yml` file.
- Set `mongo_user` field same as mongo user you created in mongodb cloud.
- Replace `[your_mongodb_password]` in text file for environment variables.

```
MONGO_PWD=[your_mongodb_password]
```

4. Enable [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html)
- Click on `Admin console` button.
- In label field, input `telar social`. Choose `reCAPTCHA v2` from `reCAPTCHA type`. Add your domain `[your-github-username].o6s.io` in `Domains` field and click on`+` button.In my case the `[your-github-username]` is red-gold (`red-gold.o6s.io`). 
- Enable `Accept the reCAPTCHA Terms of Service` and click on `submit` button.
- Copy `site key` and set `recaptcha_site_key` in `config/app_config.yml` file.
- Replace [your_recaptcha_key] in text file for environment variables.

```
RECAPTCHA_KEY=[your_recaptcha_key]
```

5. Following [Github instruction](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/) create an oauth app. Be sure to set `Authorization callback URL` to `https://[your_github_username].o6s.io/auth` in my case `https://red-gold.o6s.io/auth`.
- Copy you oauth app client id and set `client_id` in `telar-web/config/storage_config.yml` file.
- Replace [your_github_client_secret] in text file for environment variables.

```
CLIENT_SECRET=[your_github_client_secret]
```

6. Generate a key/pair. 
This key/pair is used to sign the JWT and then verify it later. 

- To generate private key run below command.

```
openssl ecparam -genkey -name prime256v1 -noout -out key
```

- To generate public key
```
openssl ec -in key -pubout -out key.pub
```

7. Set email for sending signup/reset password verfication code.
- Set `ref_email` in `telar-web/config/app_config.yml` file to your email.
- Replace [your_email_password] in text file for environment variables.

```
REF_EMAIL_PASS=[your_email_password]
```

8. Replace your admin account username and password in environment variables file.

```
ADMIN_USERNAME=[your_admin_username]
ADMIN_PASSWORD=[your_admin_password]
```

9. After setting all the secrets in environment variables, using terminal, in the root of `telar-web` project enter all variables.
```
MONGO_PWD=[your_mongofb_password] RECAPTCHA_KEY=[your_recaptcha_key] CLIENT_SECRET=[your_github_client_secret] REDIS_PWD='no-value' ADMIN_USERNAME=[your_admin_username] ADMIN_PASSWORD=[your_admin_password] PAYLOAD_SECRET=[your_payload_secret] REF_EMAIL_PASS=[your_email_password] PHONE_AUTH_TOKEN='no-value' PHONE_AUTH_ID='no-value'
```

10. From terminal and in the root directory of `telar-web` project enter blow command. Replace `[you_github_user_name]-secrets` with you Github username in my case `red-gold-secrets`.
```
faas-cli cloud seal --name red-gold-secrets \
--literal mongo-pwd="$MONGO_PWD" --literal recaptcha-key="$RECAPTCHA_KEY" \
--from-file="key" --from-file="key.pub" --from-file="serviceAccountKey.json" \
--literal ts-client-secret="$CLIENT_SECRET" --literal redis-pwd="$REDIS_PWD" \
--literal admin-username="$ADMIN_USERNAME" \
--literal admin-password="$ADMIN_PASSWORD" --literal payload-secret="$PAYLOAD_SECRET" \
--literal ref-email-pass="$REF_EMAIL_PASS" --literal phone-auth-token="$PHONE_AUTH_TOKEN" \
--literal phone-auth-id="$PHONE_AUTH_ID"
 ```

 Check the `telar-web` root directory, you should see `secrets.yml` file. Copy this file in `ts-serverless` root directory too.

11. Enable realtime data for user chat, notification and actions.
We are using [socket.io](https://socket.io/) to handle realtime data. We provided a websocket server running on Heroku. Setup websocket server following bellow steps. We assumed you have Heroku account logged in already.
    1. Go to [ts-websocket](https://github.com/Qolzam/ts-websocket) repository and click on `Deploy to Heroku`.
    2. You will be redirected to `Heroku` website. Type your app name and click on `Deploy app`.
    3. Click on `Manage App` then click on `Settings` tab. Find `Config Vars` and click on `Reveal Config Vars`.
    4. Add following Key/Value in your app.
    - Key: `GATEWAY` , Value: https://[your-github-username].o6s.io/
    - Key: `PAYLOAD_SECRET` , Value: `your_payload_secret`
    - Key: `PRETTY_URL` , Value:  `true`
    - Verify your app using `https://[your_heroku_app_name].herokuapp.com/ping`. You should recevice `success: true` which means your websocket server is running.
    5. From `telar-web` root directory, go to config folder and open `gateway_config.yml` file. Set `websocket_server_url` variable to `https://[your_heroku_app_name].herokuapp.com` . Replace `[your_heroku_app_name]` with your app name in heroku.

12. Generate stack.yml file
Go to telar-web project root directory run command blow 

```
sudo ./tsocial stack
```
Go to ts-serverless project root directory run command blow 

```
sudo ./tsocial stack
```

### Deploy Telar Social🎯
From terminal go to the root of each project (`telar-web`, `ts-serverless`, `ts-ui`) and run command blow.

```
git add . && git commit -sm 'Deploy Telar Social.' && git push
```

It may takes some minutes to deploy functions running on OpenFaaS Cloud: Community Cluster. You are able to check [the build status](https://docs.openfaas.com/openfaas-cloud/user-guide/#check-the-status-of-the-build) from your github repository or from [OpenFaaS slack channel](https://openfaas.slack.com/archives/CAN60NKBM). When the build and deployment is done, you can access to Telar Social using `https://[your-github-username].o6s.io/`,in my case the [your-github-username] is red-gold `https://red-gold.o6s.io/admin`. Click on start to start the project.

To start go https://[your-github-username].o6s.io/auth/admin/login page. Wait until you seen welcome page.

Now your Telar social is ready to use!😍🏆

#### Access pages:
- Signup page: `https://[your-github-username].o6s.io/auth/signup`
- Login page: `https://[your-github-username].o6s.io/auth/login`


### Learn more about the project 🥧 🍰 🎂 🍮 🍭 🍬
- Telar Social using Domain Driven Design(DDD) for Microservices
- Telar Social Privacy
- Real-time server-client interaction using Websocket server and Redux in Telar Social
- Telar Social front-end DI (Dependency Injection)
- Telar Social AI in front-end for privacy
- Telar Social AI Moderation

















