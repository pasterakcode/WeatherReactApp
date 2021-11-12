Weather App

----
The application allows you to check the temperature and humidity of the air in two cities (to choose from).
----

Important infomrations:
1. After launching the application, the user is asked to choose a city

![mobile_start](https://user-images.githubusercontent.com/78322363/141533776-23033aec-6f3b-4839-8cd9-3805529683be.JPG)

2. The developer can add new cities to the list in a simple way: cities are stored in the "towns" board.

![prepareForNextTown](https://user-images.githubusercontent.com/78322363/141533992-ffced23f-0f28-4665-a0f0-3333c975a2f9.JPG)

3. After selecting the city, the user sees information about downloading data from the API.

![mobile_waitingOnData](https://user-images.githubusercontent.com/78322363/141534119-8504bc59-15a7-416f-907c-9a660b891a59.JPG)

4. After downloading information from the API, they are displayed in a table in the form: Date and time of data update by the provider, temperature [C] and air humidity [%]

![mobile_selected](https://user-images.githubusercontent.com/78322363/141534330-bd598e38-2b8a-4962-b7ec-d07e2bd16290.JPG)

5. As expected, the application refreshes the data every 10 seconds, even though the API provider (openWeather) refreshes the data less frequently. The last item in the table "time to update" informs about the countdown to refresh

6. The application has a mobile version (above) and a desktop (below)

![desktop_selected](https://user-images.githubusercontent.com/78322363/141534664-e97bf9d9-09a8-47f6-81dd-5f2d7757d2af.JPG)
----

To start Application please do:
1. Download all project to your device
2. Ask me about file config.js -> there are nessesary information to start application
3. Paste file config.js (from me) to folder "src" in my projects
4. Open termial in folder where you downloaded my project
5. Install NPM / use command: npm install -g npm
6. Install React DOM/ npm install --save react react-dom
7. Install Axios / npm i axios
8. Install Bootstrap / npm i bootstrap

9. Use command: npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

----

Have fun!
Pawel
