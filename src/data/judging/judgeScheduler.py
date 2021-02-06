import json
import random

with open('./judges.json') as j:
    JUDGES = json.load(j)

NUM_JUDGES = len(JUDGES)

# Number of projects each judge can view
TIME_FOR_ONE_PROJECT = 15
TOTAL_TIME = 90
NUM_PROJECTS_PER_JUDGE = int(TOTAL_TIME / TIME_FOR_ONE_PROJECT)


# Load projects from json
def parse_project():
    with open('./projectData.json') as f:
        return json.load(f)


def scheduling_conflict(curr_proj, assigns, curr_round):
    for judge in assigns:
        try:
            pot_conflict = assigns[judge][curr_round]
        except IndexError:
            pot_conflict = None

        if pot_conflict is not None and pot_conflict['projectName'] == curr_proj['projectName']:
            return True

    return False


def distribute_projects(projects):
    assignments = {}

    # Assign projects for each judge
    for judge in JUDGES:
        for i in range(NUM_PROJECTS_PER_JUDGE):
            # Select project from list using random num
            proj = projects[random.randint(0, len(projects) - 1)]

            judges_projects = assignments.get(judge, [])
            # If project is already assigned to this judge, find another one
            while proj in judges_projects or scheduling_conflict(proj, assignments, i):
                proj = projects[random.randint(0, len(projects) - 1)]

            # Add to the list of judges for this project
            judges_projects.append(proj)
            assignments[judge] = judges_projects

    return assignments


# Send assignments_dict to json file for front-end
def dump_json(assignments_dict):
    with open('./results.json', 'w') as fp:
        json.dump(assignments_dict, fp, indent=2)


projectObj = parse_project()
# print(projectObj)
judge_assignments = distribute_projects(projectObj)
dump_json(judge_assignments)
