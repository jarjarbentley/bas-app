Set up the demo

- Create a job (the plus button) in the SAP Continuous Integration and Delivery service
- Within the job when you’re picking the repository, you can actually click “Add Repository” right
  then
  <br>![](/readme_images/add_repository.png)
- Add a name and the url of this repo, and keep the webhook info as-is
  <br>![](/readme_images/save_repo.png)
- The branch will be main and the pipeline will be SAP Fiori in the Cloud Foundry environment
  <br>![](/readme_images/set_up_job.png)
- Scroll down to the Stages section. You can keep malware scan on (on by default). Turn on
  Acceptance with the toggle switch. This is where you’ll need info from a CF space in your BTP
  trial account.
- You get the API Endpoint and the Org name from the overview page of your subaccount
  <br>![](/readme_images/find_cf_info.png)
- And the Space if of course the name of the cloud foundry space in that subaccount
- Credentials is the same story as repository, you can actually create them from the dropdown right
  there
  <br>![](/readme_images/create_credentials.png)
- As my screenshot may give away, you’ll want to create credentials that are for accessing the cloud
  foundry space you created. So make sure that that user is also added as at least a developer in
  the space (I’ve forgotten to do that multiple times). Here’s where you can make sure that the user
  is part of the space
  <br>![](/readme_images/technical_user.png)
- Once you have this information, you can do a first run of the pipeline by clicking “Create” at the
  bottom and then clicking “Run” at the top.
- After the run is successful, you should be able to see the application in your cloud foundry
  space. section of your subaccount. Click on the app name.
  <br>![](/readme_images/click_on_app.png)
- That is your base URL under "Application Routes". You can edit your pipeline job again and turn on
  WebdriverIO test, and then paste in your Base URL. There are no credentials required to access the
  app, so you can leave that blank. Keep the npm Script as default (wdio).
  <br>![](/readme_images/wdio_setup.png)
- (if you want to view the application, you can click on the url, but then you'll need to add
  /nsHTML5Module/index.html to the end)
- Run your pipeline again.
- While you wait, you can set up a webhook with your repository following the
  documentation [here](https://developers.sap.com/tutorials/btp-app-ci-cd-btp.html) (just the Create
  a Webhook part)
- Your pipeline should fail in the Acceptance stage, because the wdio test is checking for the wrong
  title (you can see it in the logs if you click on the stage, but it's not so nice to show in a
  demo)
  <br>![](/readme_images/failing_logs.png)
- Change the test/specs/example.e2e.js file to say "Title" instead of "Tile". Commit the result and
  you should see (because of the webhook) that the job has automatically started and will be
  successful  