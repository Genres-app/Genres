export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "Genres": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "analytics": {
        "genres": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    },
    "api": {
        "genres": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}