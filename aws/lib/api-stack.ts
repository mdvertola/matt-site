import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import * as pylambda from "@aws-cdk/aws-lambda-python-alpha";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { ApiStackProps } from "../bin/aws";
export class ApiStack extends cdk.Stack {
  readonly api: apigw.RestApi
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    // api endpoints
    this.api = new apigw.RestApi(this, "api", {
      description: "api",
      deployOptions: {
        stageName: "prod",
      },
      defaultCorsPreflightOptions: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
        ],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: ["*"],
      },
    });
    // /
    const apiRoot = this.api.root;
    // /{app_user}
    const preview = apiRoot.addResource("preview");
    preview.addMethod(
      "GET",
      new apigw.LambdaIntegration(props.linkPreviewLambda)
    );
  }
}
