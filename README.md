## About
[Edgemicro](http://docs.apigee.com/microgateway/content/edge-microgateway-home) CORS [plugin](http://docs.apigee.com/microgateway/latest/using-plugins), that handles CORS requirements of adding headers to response and pre-flight requests


## Why
If APIs exposed using Edgemicro are accessed from browser based applications deployed on a different domain, then these APIs need to support CORS

## Configuration

##### Plugin configuration
```
<EDGEMICRO_HOME>/plugins git clone https://github.com/mukundha/cors-edgemicro-plugin
```

##### Sequence Configuration
Make sure, this plugin appears before all other plugins
```
  plugins:
    sequence:
      - cors-edgemicro-plugin
      - oauth
```
[More Details](http://docs.apigee.com/microgateway/latest/using-plugins)

