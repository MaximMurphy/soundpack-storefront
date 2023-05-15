import { Disclosure } from "@headlessui/react";

const MyDisclosure = () => {
  return (
    <section className="flex flex-col items-center ">
      <h1 className="font-semibold mb-2 underline decoration-1 underline-offset-2">
        FAQ&apos;s
      </h1>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
        <Disclosure>
          <div className="flex flex-col items-center">
            <Disclosure.Button>
              <p className="bg-stone-100 dark:bg-stone-900 w-48 lg:w-96 border border-stone-200 dark:border-stone-950 text-base font-medium tracking-wide p-4">
                What exactly happens after ordering?
              </p>
            </Disclosure.Button>
            <Disclosure.Panel>
              <p className="bg-stone-100 dark:bg-stone-900 w-48 lg:w-96 border border-stone-200 dark:border-stone-950 text-base font-medium tracking-wide p-4">
                After ordering you will receive an order confirmation via e-mail
                with a link to download your order.
              </p>
            </Disclosure.Panel>
          </div>
        </Disclosure>
        <Disclosure>
          <div className="flex flex-col items-center">
            <Disclosure.Button>
              <p className="bg-stone-100 dark:bg-stone-900 w-48 lg:w-96 border border-stone-200 dark:border-stone-950 text-base font-medium tracking-wide p-4">
                Are WAVFORM sounds royalty free?
              </p>
            </Disclosure.Button>
            <Disclosure.Panel>
              <p className="bg-stone-100 dark:bg-stone-900 w-48 lg:w-96 border border-stone-200 dark:border-stone-950 text-base font-medium tracking-wide p-4">
                All sounds bought and downloaded here are 100% roylaty free.
                They can all be used directly in your tracks without
                consequence.
              </p>
            </Disclosure.Panel>
          </div>
        </Disclosure>
      </div>
    </section>
  );
};

export default MyDisclosure;
