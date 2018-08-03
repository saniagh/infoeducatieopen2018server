<h1>NetMax - Server</h1>


<h3>1. Installation</h3>
<p>Run this command</p>

```shell
npm install
```
<p>To run it locally you also need to create a folder in the root directory calle db-config with a file index.json in it with the content: </p>

```json
{
  "dbUri": "mongodb://localhost/yourDbName"
}
```

<p>To start the server in production mode, run:</p>

```shell
npm run cluster-server
```

<p>To start the server in development mode, run:</p>

```shell
npm start
```

<h4>a. Security</h4>
<p>In production the server runs on 8 instances, it is protected from being abused by calling specific routes too many times and has a Ddos protection ( traffic also goes through Nginx - reverse proxy ).</p>

<h3>2. Purpose</h3>
<p>Provides the server for the Chrome Extension and a small web app for viewing some user data.</p>

<h3>3. Requirements</h3>
<p>The project has been developed on:</p>
<ul>
<li>NodeJS v9.10.1</li>
<li>npm 5.6.0</li>
<li>MongoDB 3.4.10, git version: 078f28920cb24de0dd479b5ea6c66c644f6326e9</li>
<li>webpack 3.8.1</li>
<li>other modules listen in package.json</li>
</ul>

<h3>4. Creator</h3>
<p>Valentin Marian Constanda</p>