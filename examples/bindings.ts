// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.
export type Procedures = {
  queries:
    | { key: "X-Demo-Header"; input: never; result: string; error: Error }
    | { key: "customErr"; input: never; result: null; error: MyCustomError }
    | { key: "echo"; input: string; result: string; error: Error }
    | { key: "echo2"; input: string; result: string; error: Error }
    | { key: "error"; input: never; result: string; error: Error }
    | { key: "transformMe"; input: never; result: string; error: Error }
    | { key: "version"; input: never; result: string; error: Infallible };
  mutations:
    | { key: "error"; input: never; result: string; error: Error }
    | { key: "sendMsg"; input: string; result: string; error: Error };
  subscriptions:
    | { key: "batchingTest"; input: never; result: string; error: Error }
    | { key: "errorPings"; input: never; result: string; error: Error }
    | { key: "pings"; input: never; result: string; error: Error }
    | {
        key: "testSubscriptionShutdown";
        input: never;
        result: number;
        error: Error;
      };
};

export type Error = string;

export type Infallible = never;

export type MyCustomError = "IAmBroke";
