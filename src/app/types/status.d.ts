export interface IStatus {
  isBranchDeploying: boolean;
  lastDeploy: {
    branch: string;
    envName: string;
    result: {
      error: string;
      message: string;
    };
  }
}
