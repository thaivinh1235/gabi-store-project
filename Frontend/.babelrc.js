const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            alias: {
                "~": "./src"
            }
        }

    ]

];

// import App from '~/App