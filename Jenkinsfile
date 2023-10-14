node {
    def gitcommit
    def contenedortest = docker.image('node:18')
    
    stage('test'){
        sh "echo 'test'"
        sh "git status"
    }

    // stage('Verificación SCM') {
    //     checkout scm
    //     sh "git rev-parse --short HEAD > .git/commit-id"
    //     gitcommit = readFile('.git/commit-id').trim()
    // }

    // stage('Test Node.js') {
    //     contenedortest.pull()
    //     contenedortest.inside {
    //         sh 'npm install --only=dev'
    //         sh 'npm test'
    //     }
    // }

    // stage('Docker Build & Push') {
    //     docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
    //     def nuestraapp = docker.build("erielit/devops:${gitcommit}", ".")
    //         nuestraapp.push()
    //     }
    // }

    // stage('Deploy') {
    //     sh "sed -i 's/<IMAGE_TAG>/${gitcommit}/g' deployment.yaml"
    //     sh "kubectl apply -f deployment.yaml"
    // }
}