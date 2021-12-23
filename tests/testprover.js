// test the prover
// input = 784 size array of ints in [0,255] range
// output = classified digit
// run with a set of random input strings, and validate output by comparing
// with Colab notebook generated outputs

import { generateProof } from "./snarkUtils";

async function doProof(imageVec) {
    console.log(imageVec);
    // const { proof, publicSignals } = await generateProof(imageVec)
    // console.log('classified digit = ', publicSignals);
}

