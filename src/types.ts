export type TaskDetails = {
    description?: string;
    priority?: number;
    dueDate?: Date;
    tags?: string[];
    // Additional properties as needed
}

export interface ExtendedTaskDetails extends TaskDetails {
    file: string;
    line: number;
}

export interface TaskModalProps {
onClose: () => void; // Assuming onClose is a function that takes no arguments and returns nothing
}