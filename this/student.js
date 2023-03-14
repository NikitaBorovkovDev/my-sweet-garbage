let student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        if (this.level < 5) {
            ++this.level;
            switch (this.level) {
                case 2:
                    this.stack.push('CSS')
                    break
                case 3: 
                    this.stack.push('JS')
                    break
                case 4: 
                    this.stack.push('React')
                    break
                case 5: 
                    this.stack.push('Node.JS')
                    break
            }
        } else {
            console.log('all done');
        }
        
    }
}

student.improveLevel()
student.improveLevel()
student.improveLevel()
console.log(student.level, student.stack);
student.improveLevel()
student.improveLevel()
console.log(student.level, student.stack);