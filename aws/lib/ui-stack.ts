import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
export class UiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3
    const siteBucket = new s3.Bucket(this, "site-bucket");

    // cloudfront
    const siteDistribution = new cloudfront.Distribution(this,`site-dist`,
      {
        defaultBehavior: {
          origin: new S3Origin(siteBucket),
        },
        defaultRootObject: "index.html"
      }
    );

    // s3 site deployment
    const deployment = new s3Deployment.BucketDeployment(
      this,
      "site-deployment",
      {
        sources: [s3Deployment.Source.asset("./build")],
        destinationBucket: siteBucket,
        distribution: siteDistribution,
        distributionPaths: ["/*"],
      }
    );

    // link preview lambda
    

    // Outputs
    new CfnOutput(this, "siteBucket", { value: siteBucket.bucketName });
    new CfnOutput(this, "siteDistribution", {
      value: siteDistribution.distributionDomainName,
    });
    new CfnOutput(this, "siteDistributionID", {
      value: siteDistribution.distributionId,
    });
  }
}
