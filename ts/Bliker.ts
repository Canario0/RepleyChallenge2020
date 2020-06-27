class Bliker {
    private domElement: HTMLElement;
    private text: string;

    constructor(domId: string, inputText?: string) {
        this.domElement = document.getElementById(domId);
        if (inputText) {
            this.text = inputText;
        }
    }

    async blink() {
        while (true) {
            this.domElement.textContent = this.text;
            await this.sleep().then((data) => console.log(data));
            this.domElement.textContent = '';
            await this.sleep().then((data) => console.log(data));
        }
    }

    sleep(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve('holi'), 5000);
        });
    }

    log(): void {
        console.log('Hola');
    }
}