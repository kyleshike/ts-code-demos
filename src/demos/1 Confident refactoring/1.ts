function applyToProject(participantId: number, projectId: number) {
  console.log(`participant ${participantId} applied to ${projectId}`);
}

// function applyToProject({
//   participantId,
//   projectId,
// }: {
//   participantId: number;
//   projectId: number;
// }) {
//   console.log(`participant ${participantId} applied to ${projectId}`);
// }

const participantId = 1;
const projectId = 2;

applyToProject(participantId, projectId);
applyToProject(projectId, participantId);

export {};
