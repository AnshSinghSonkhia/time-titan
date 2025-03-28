export default function mockDate(instance, fakeDate) {
    const fakeTimestamp = new Date(fakeDate).getTime();

    // Override Date class
    class MockedDate extends Date {
        constructor(...args) {
            if (args.length === 0) {
                super(fakeTimestamp);
            } else {
                super(...args);
            }
        }

        static now() {
            return fakeTimestamp;
        }
    }

    globalThis.Date = MockedDate;

    // Store the fake date in the instance
    instance.mockedDate = fakeDate;
}