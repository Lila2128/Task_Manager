export class tasks {

    static getIncompletedTasks() {
        let taskURL = "https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/?status=Incomplete";
        return fetch(taskURL);
    }

    static getCompletedTasks() {
        let taskURL = "https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/?status=Task%20Completed";
        return fetch(taskURL);
    }

    static getAllTasks() {
        let taskURL = "https://65269f8f917d673fd76ca8e4.mockapi.io/tasks";
        return fetch(taskURL);
    }

    static getTasks(id) {
        let taskURL = "https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/" + id;
        return fetch(taskURL);
    }

    static deleteTask(id) {
        let taskURL = "https://65269f8f917d673fd76ca8e4.mockapi.io/tasks/" + id;
        return fetch(taskURL, {
            method: 'DELETE'
        });
    }

    static changeStatus(id) {
        let taskURL = "/tasks/" + id;
        return fetch(taskURL, {
            method: 'PATCH', mode: 'cors', headers: {
                "Content-type": "application/json",
            }, body:({
                status: 'Task Completed'
            })
        })
    }
}