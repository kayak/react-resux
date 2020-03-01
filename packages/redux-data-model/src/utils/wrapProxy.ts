/**
 * @ignore
 */
export function wrapProxy(data: any, model: any, CustomException) {
  return new Proxy(data, {
    get: (
      function (target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);

        if (
          typeof prop !== 'string' ||
          prop == 'length' ||
          (value && prop in target)
        )
          return value;

        throw new CustomException(prop, model);
      }
    ).bind(model),
    enumerate: function (target) {
      return Object.keys(target);
    },
    ownKeys: function (target) {
      return Object.keys(target);
    },
    has: function (target, key) {
      return key in target;
    },
    defineProperty: function (target, key, desc) {
      return Reflect.defineProperty(target, key, desc);
    },
    getOwnPropertyDescriptor: function (target, key) {
      return Reflect.getOwnPropertyDescriptor(target, key);
    },
  });
}
