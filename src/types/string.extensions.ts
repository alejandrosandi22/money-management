export {};

declare global {
  interface String {
    toCapitalize(): string;
  }
}

if (!String.prototype.hasOwnProperty('toCapitalize')) {
  Object.defineProperty(String.prototype, 'toCapitalize', {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
  });
}
