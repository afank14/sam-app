'use strict';

import { lambdaHandler } from '../../app.mjs';
import { expect } from 'chai';
var event, context;

describe("Tests index", function () {
  it("verifies successful response", async () => {
    const event = {}; // Define event object if required
    const context = {};

    const result = await lambdaHandler(event, context);

    expect(result).to.be.an("object");
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.a("string");

    let response = JSON.parse(result.body);

    expect(response).to.be.an("object");
    expect(response.message).to.equal("I'm using canary deployments!");
  });
});
