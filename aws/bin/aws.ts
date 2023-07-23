#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { UiStack } from "../lib/ui-stack";
import { ComputeStack } from "../lib/compute-stack";
import { ApiStack } from "../lib/api-stack";
import * as pylambda from "@aws-cdk/aws-lambda-python-alpha";
const stackName = process.env["STACK_NAME"];
const app = new cdk.App();


// compute resources (ie lambda functions)
const compute = new ComputeStack(app, "ComputeStack", {
  stackName: `${stackName?.toLowerCase()}-compute`,
});


// api resources (ie apigw, cognito)
export interface ApiStackProps extends cdk.StackProps {
  linkPreviewLambda: pylambda.PythonFunction;
}
const api = new ApiStack(app, "ApiStack", {
  stackName: `${stackName?.toLowerCase()}-api`,
  linkPreviewLambda: compute.linkPreviewLambda,
});
api.addDependency(compute);


// ui resources (ie s3, cloudfront, s3 deploy)
const ui = new UiStack(app, "UiStack", {
  stackName: `${stackName?.toLowerCase()}-ui`,
});
ui.addDependency(compute);
ui.addDependency(api);
