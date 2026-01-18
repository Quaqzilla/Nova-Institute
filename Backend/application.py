import mysql.connector

#Database connection
connection = mysql.connector.connect(
    database = "Nova",
    user = "",
    password = "",
    host = "localhost"
)

class Application_Form():
    def __init__(self, name, surname, course, enrollment_type, course_type):
        self.name = name
        self.surname = surname
        self.course = course
        self.enrollment = enrollment_type
        self.course_type = course_type

    #Add all information to database
    def add_to_database(self):
        try:
            if connection.is_connected():
                cursor = connection.cursor()
                sql_Insert_query = "INSERT INTO Application (name, surname, course, enrollment_type, course_type) VALUES (%s, %s, %s, %s, %s)"
                sql_Insert_values = (self.name, self.surname, self.course, self.enrollment, self.course_type)
                cursor.execute(sql_Insert_query, sql_Insert_values)

        except mysql.connector.Error as e:
            print(f"An error occured {e}")

            

