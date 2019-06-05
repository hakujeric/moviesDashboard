# import necessary libraries
import os

import pandas as pd
import numpy as np

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db/movieData.sqlite"
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
# Movie_ScrapedData = Base.classes.movie_scraped_data
Movie_Metadata = Base.classes.movie_metadata

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/metadata")
def names():
    """Return metadata """

    # Use Pandas to perform the sql query
    stmt = db.session.query(Movie_Metadata).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.columns)[1:])


if __name__ == "__main__":
    app.run()
