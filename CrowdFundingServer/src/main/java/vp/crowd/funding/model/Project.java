package vp.crowd.funding.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(catalog = "crowd_funding")
public class Project {

	@Id
	@GeneratedValue
	private Long id;
	private String title;
	private String description;
	private double goal;
	private double currentAmount;
	private String imagePath;
	private Date dateOfPublication;
	@ManyToOne
	private City city;

	public Project() {

	}

	public Project(String title, String description, double goal, double currentAmount, String imagePath,
			Date dateOfPublication,City city) {
		this.title = title;
		this.description = description;
		this.goal = goal;
		this.currentAmount = currentAmount;
		this.imagePath = imagePath;
		this.dateOfPublication = dateOfPublication;
		this.city = city;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getGoal() {
		return goal;
	}

	public void setGoal(double goal) {
		this.goal = goal;
	}

	public double getCurrentAmount() {
		return currentAmount;
	}

	public void setCurrentAmount(double currentAmount) {
		this.currentAmount = currentAmount;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Date getDateOfPublication() {
		return dateOfPublication;
	}

	public void setDateOfPublication(Date dateOfPublication) {
		this.dateOfPublication = dateOfPublication;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", title=" + title + ", description=" + description + ", goal=" + goal
				+ ", currentAmount=" + currentAmount + ", imagePath=" + imagePath + ", dateOfPublication="
				+ dateOfPublication + "]";
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

}
