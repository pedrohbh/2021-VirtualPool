package br.ufes.informatica.oldenburg.core.domain;

import java.util.*;
import java.math.*;
import javax.persistence.*;
import javax.validation.constraints.*;
import br.ufes.inf.nemo.jbutler.ejb.persistence.PersistentObjectSupport;

/** TODO: generated by FrameWeb. Should be documented. */
@Entity
public class Author extends PersistentObjectSupport implements Comparable<Author> {
	/** Serialization id. */
	private static final long serialVersionUID = 1L;



	/** TODO: generated by FrameWeb. Should be documented. false */
	@NotNull  
	private String name;







	/** Getter for name. */
	public String getName() {
		return name;
	}
	
	/** Setter for name. */
	public void setName(String name) {
		this.name = name;
	}








	/** @see java.lang.Comparable#compareTo(java.lang.Object) */
	@Override
	public int compareTo(Author o) {
		// FIXME: auto-generated method stub		
		return super.compareTo(o);
	}
}