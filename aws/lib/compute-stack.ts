import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import * as pylambda from "@aws-cdk/aws-lambda-python-alpha";
import * as lambda from "aws-cdk-lib/aws-lambda"
export class ComputeStack extends cdk.Stack {
  public readonly linkPreviewLambda: pylambda.PythonFunction;
  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // lambda functions
    this.linkPreviewLambda = new pylambda.PythonFunction(
      this,
      "linkPreviewLambda",
      {
        entry: "opt/lambda/linkPreview",
        runtime: lambda.Runtime.PYTHON_3_9,
        handler: "lambda_handler",
        index: "preview.py",
        timeout: cdk.Duration.seconds(30),
        environment: { bucket_name: "" },
        memorySize: 256,
        layers: [
          new pylambda.PythonLayerVersion(this, "linkPreviewLambdaLayer", {
            entry: "opt/lambda/linkPreview", // point this to your requirement.txt's parent directory
            compatibleRuntimes: [lambda.Runtime.PYTHON_3_9],
          }),
        ],
      }
    );
  }
}
