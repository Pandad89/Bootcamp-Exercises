const step = "#";

function positive(N) {
    for (i = 0; i < N; i++){
        console.log(step.repeat(i));
    }
}

positive(10);