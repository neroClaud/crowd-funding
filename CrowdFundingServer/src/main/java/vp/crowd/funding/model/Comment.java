package vp.crowd.funding.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(catalog="crowd_funding",name="comment_comm")
public class Comment {

	@Id
	@GeneratedValue
	private Long id;
	private String nick;
	@Column(name="text",length=5000)
	private String text;
	@ManyToOne(fetch = FetchType.EAGER)
	private Project project;
	@ManyToOne(fetch = FetchType.EAGER)
	private Comment reference_comment;

	public Comment() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Comment getReference_comment() {
		return reference_comment;
	}

	public void setReference_comment(Comment reference_comment) {
		this.reference_comment = reference_comment;
	}

}
