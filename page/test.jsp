<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="/fis" prefix="fis"%><!DOCTYPE html><fis:html id="abc" framework="/static/js/require.js">
    <fis:head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </fis:head>

    <fis:body>
        <div>abcdefg</div>

        <div id="wrapper">

        </div>

        <div>abcdefg</div>

    <fis:script src="../static/js/esl.js"></fis:script>

    <fis:script>
        require(['./examples/data.js'], function(abc) {

        });

        require.async(['./examples/data.js'], function(abc) {

        });
    </fis:script>

    </fis:body>
</fis:html>
