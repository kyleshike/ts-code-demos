function applyToProject(participantId, projectId) {
  console.log(`participant ${participantId} applied to project ${projectId}`);
}

// function applyToProject({ participantId, projectId }) {
//   console.log(`participant ${participantId} applied to ${projectId}`);
// }

const participantId = 1;
const projectId = 22;

applyToProject(participantId, projectId);
applyToProject(projectId, participantId);

export {};
