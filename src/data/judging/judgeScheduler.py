import json
import random

with open('./judges.json') as j:
    JUDGES = json.load(j)

NUM_JUDGES = len(JUDGES)

# Number of projects each judge can view
TIME_FOR_ONE_PROJECT = 10
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


def add_break(assignments):
    for judge, projects in assignments.items():
        projects.insert(5, {
            'projectName': 'Break Time'
        })
    return assignments


def create_project_schedules(assignments_dict):
    project_schedules = {}
    for project in projectObj:
        project_schedules[project['projectName']] = get_project_schedule(project['projectName'], assignments_dict)

    return project_schedules


def get_project_schedule(project_name, assignments):
    schedule = []

    for i in range(NUM_PROJECTS_PER_JUDGE+1):
        foundProj = False
        for judge, projects in assignments.items():
            if projects[i]['projectName'] == project_name:
                schedule.append(judge)
                foundProj = True

        if not foundProj:
            schedule.append('Break')

    return schedule


# Send assignments_dict to json file for front-end
def dump_json(assignments_dict, file_path):
    with open(file_path, 'w') as fp:
        json.dump(assignments_dict, fp, indent=2)


projectObj = parse_project()
judge_assignments = distribute_projects(projectObj)
with_break = add_break(judge_assignments)
dump_json(with_break, './results.json')

# create perProject schedules
dump_json(create_project_schedules(judge_assignments), './projectResults.json')
