import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from "react-router-dom"
import App from "../router/App"

const renderer =(req)=>{
 const html = renderToString
 (
     <StaticRouter location={req.url} context={{
         "name":"laukesh"
     }}>
           <App/>
     </StaticRouter>
)

    return (
        `<html>
        <head></head>
        <body>
            <div id ="app">${html}</div>
            <script src="bundle.js"></script>
        </body>
    </html>`
    )
}

export default  renderer