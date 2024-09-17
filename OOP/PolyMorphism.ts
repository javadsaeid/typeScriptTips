//polymorphism is the use of a single symbol to represent multiple different types.

class Test {
    testA() {
        console.log('runing test A')
    }

    testB() {
        console.log('runing test B')
    }
}

class SchoolTest extends Test {}

class UniTest extends Test {}

function checkTest(test: Test) {
    test.testA();
    test.testB();
}

const t1 = new SchoolTest();
const t2 = new UniTest();
// checkTest expect Test and works with subclasses
checkTest(t1);
checkTest(t2);