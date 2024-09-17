//polymorphism is the use of a single symbol to represent multiple different types.

class Test {
    testA() {

    }

    testB() {

    }
}

class SchoolTest extends Test {}

class UniTest extends Test {}

function checkTest(test: Test) {
    console.log('calling test');
}

const t1 = new SchoolTest();
const t2 = new UniTest();

checkTest(t1);
checkTest(t2);