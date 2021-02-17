import csv
import json

SUBMISSION_PASSWORD = 'hbp_goes_camping'

with open('projects.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    rows = []
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        elif row[10] != SUBMISSION_PASSWORD: # TODO: Change this once we know what row it's supposed to be
            rows.append({
                "projectName": row[0],
                "submissionLink": row[1],
                "tryItOutLink": row[7],
                "videoDemoLink": row[8],
                "liveDemo": row[9]
            })

with open('projectData.json', 'w') as outfile:
    json.dump(rows, outfile, indent=2)
