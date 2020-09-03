class Widget {
    constructor(name, options) {
        this.name = name;
        this.options = options;

        this.className = 'widget';
    }

    render() {
        return `<div class="${this.className}">${this.name}</div>`;
    }
}

const test = new Widget('test');

console.log(test.render());

class AdvertWidget extends Widget {
    constructor(...args) {
        super(args);
    }

    render() {
        return super.render();
    }
}

const advert = new AdvertWidget('advert');

console.log(advert.render());
